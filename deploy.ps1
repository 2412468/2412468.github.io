#Requires -Version 5.1
param(
  [Parameter(Mandatory=$true)][string]$User,
  [Parameter(Mandatory=$true)][string]$Token,
  [string]$Root = ""
)
$ErrorActionPreference = "Continue"
if (-not $Root) { $Root = Join-Path $PSScriptRoot "public" }
if (-not (Test-Path $Root)) { Write-Host "[X] root not found: $Root"; exit 1 }

$repo = "$User.github.io"
$site = "https://$repo"
$headers = @{ Authorization = "token $Token"; "User-Agent" = "dsh-deploy"; Accept = "application/vnd.github+json" }

function Ok($m)   { Write-Host "[OK] $m" -ForegroundColor Green }
function Info($m) { Write-Host "[*] $m" -ForegroundColor Cyan }

Info "1/5 validate token"
try {
  $me = Invoke-RestMethod -Uri "https://api.github.com/user" -Headers $headers -TimeoutSec 20
  Ok ("logged in as " + $me.login)
} catch { Write-Host "[X] token invalid"; exit 1 }

Info "2/5 repo $repo"
$repoBody = @{ name = $repo; private = $false; auto_init = $false; description = "personal homepage" } | ConvertTo-Json
$repoResp = $null
try {
  $repoResp = Invoke-RestMethod -Uri "https://api.github.com/user/repos" -Method Post -Headers $headers -Body $repoBody -ContentType "application/json" -TimeoutSec 30
  Ok "repo created"
} catch { Ok "repo exists (or already ok)" }

Info "3/5 patch placeholder url"
$count = 0
foreach ($f in @("index.html","atom.xml")) {
  $p = Join-Path $Root $f
  if (Test-Path $p) {
    $c = [System.IO.File]::ReadAllText($p)
    $n = $c.Replace("https://yourname.github.io", $site)
    if ($n -ne $c) { [System.IO.File]::WriteAllText($p, $n, (New-Object System.Text.UTF8Encoding($false))); $count++ }
  }
}
Ok ("patched files: " + $count)

Info "4/5 push"
$remoteUrl = "https://$($User):$($Token)@github.com/$User/$repo.git"
Push-Location $Root
& git config core.autocrlf false
& git config core.safecrlf false
if (-not (Test-Path ".git")) { & git init -b main | Out-Null }
& git add -A 2>&1 | Out-Null
& git -c user.name="$User" -c user.email="$User@users.noreply.github.com" commit -m "deploy $(Get-Date -Format 'yyyy-MM-dd HH:mm')" 2>&1 | Out-Null
$remotes = & git remote 2>$null
if ($remotes -contains "origin") { & git remote set-url origin $remoteUrl 2>&1 | Out-Null } else { & git remote add origin $remoteUrl 2>&1 | Out-Null }
& git push -u origin main --force 2>&1 | Out-Null
$pushExit = $LASTEXITCODE
Pop-Location
if ($pushExit -ne 0) { Write-Host "[X] push failed, exit=$pushExit"; exit 1 }
Ok "pushed"

Info "5/5 enable pages"
$pagesBody = @{ source = @{ branch = "main"; path = "/" } } | ConvertTo-Json
try {
  Invoke-RestMethod -Uri "https://api.github.com/repos/$User/$repo/pages" -Method Post -Headers $headers -Body $pagesBody -ContentType "application/json" -TimeoutSec 30 | Out-Null
  Ok "pages enabled"
} catch { Write-Host "[!] pages api returned: $($_.Exception.Message)" -ForegroundColor Yellow }

Write-Host ""
Write-Host "waiting for site..." -ForegroundColor Cyan
$live = $false
for ($i = 1; $i -le 24; $i++) {
  Start-Sleep -Seconds 5
  try {
    $r = Invoke-WebRequest -Uri ($site + "/") -UseBasicParsing -TimeoutSec 10
    if ($r.StatusCode -eq 200) { Ok ("LIVE: " + $site + "/"); $live = $true; break }
  } catch { Write-Host ("  attempt " + $i) }
}
if (-not $live) { Write-Host "[!] not live yet, check the repo Actions/Pages settings" -ForegroundColor Yellow }
Write-Host ("DONE -> " + $site + "/") -ForegroundColor Green

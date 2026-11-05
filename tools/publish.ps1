param([switch]$NoOpen)
$ErrorActionPreference = "Continue"
$blog = Split-Path -Parent $PSScriptRoot
$public = Join-Path $blog "public"
$srcrepo = Join-Path $blog ".src"
$site = "https://2412468.github.io/"

Write-Host "===== 1/3 local build (for preview) ====="
Push-Location $blog
& npx hexo clean 2>&1 | Out-Null
& npx hexo generate 2>&1 | Out-Null
Pop-Location
if (Test-Path (Join-Path $public "index.html")) { Write-Host "[OK] build done" } else { Write-Host "[!] local build failed, still pushing source" }

Write-Host "===== 2/3 sync source branch ====="
if (-not (Test-Path $srcrepo)) {
  Push-Location $blog
  & git clone -b source "git@github.com:2412468/2412468.github.io.git" ".src" 2>&1 | Out-Null
  Pop-Location
}
& robocopy $blog $srcrepo /E /XD node_modules public .deploy .src .git vendor /XF db.json /NFL /NDL /NJH /NJS /NP | Out-Null
if ($LASTEXITCODE -ge 8) { Write-Host "[X] copy failed"; exit 1 }

Push-Location $srcrepo
& git config core.autocrlf false
& git add -A 2>&1 | Out-Null
& git -c user.name="2412468" -c user.email="2412468@users.noreply.github.com" commit -m ("update " + (Get-Date -Format "yyyy-MM-dd HH:mm")) 2>&1 | Out-Null
& git push origin source
$code = $LASTEXITCODE
Pop-Location

if ($code -ne 0) {
  Write-Host "[X] push failed: nothing to push, or network/credential problem"
  exit 1
}
Write-Host "[OK] source pushed, GitHub Actions will build"
Write-Host ""
Write-Host "===== 3/3 done ====="
Write-Host ("live in 1-2 minutes: " + $site)
if (-not $NoOpen) { Start-Process $site }

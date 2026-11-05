$ErrorActionPreference = "Continue"
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$blog = Split-Path -Parent $PSScriptRoot
$public = Join-Path $blog "public"
$deploy = Join-Path $blog ".deploy"
$site = "https://2412468.github.io/"

Write-Host "===== 1/3 构建站点 =====" -ForegroundColor Cyan
Push-Location $blog
& npx hexo clean 2>&1 | Out-Null
& npx hexo generate 2>&1 | Out-Null
Pop-Location
if (-not (Test-Path (Join-Path $public "index.html"))) { Write-Host "[X] 构建失败" -ForegroundColor Red; exit 1 }
Write-Host "[OK] 构建完成" -ForegroundColor Green

Write-Host "===== 2/3 同步到部署仓库 =====" -ForegroundColor Cyan
if (-not (Test-Path $deploy)) { New-Item -ItemType Directory -Path $deploy -Force | Out-Null }
& robocopy $public $deploy /MIR /XD ".git" /NFL /NDL /NJH /NJS /NP | Out-Null
if ($LASTEXITCODE -ge 8) { Write-Host "[X] 同步失败" -ForegroundColor Red; exit 1 }
Write-Host "[OK] 同步完成" -ForegroundColor Green

Write-Host "===== 3/3 推送到 GitHub =====" -ForegroundColor Cyan
Push-Location $deploy
& git config core.autocrlf false
& git add -A 2>&1 | Out-Null
& git -c user.name="2412468" -c user.email="2412468@users.noreply.github.com" commit -m ("update " + (Get-Date -Format "yyyy-MM-dd HH:mm")) 2>&1 | Out-Null
& git push --force origin main
$code = $LASTEXITCODE
Pop-Location

if ($code -ne 0) {
  Write-Host "[X] 推送失败：没登录，或网络不通。" -ForegroundColor Red
  Write-Host "第一次会弹 GitHub 登录窗口，登录一次以后就不用再登了。"
  exit 1
}
Write-Host "[OK] 推送完成" -ForegroundColor Green
Write-Host ("线上地址: " + $site) -ForegroundColor Green
Start-Process $site

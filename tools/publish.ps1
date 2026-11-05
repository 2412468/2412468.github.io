$ErrorActionPreference = "Continue"
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$blog = Split-Path -Parent $PSScriptRoot
$public = Join-Path $blog "public"
$srcrepo = Join-Path $blog ".src"
$site = "https://2412468.github.io/"

Write-Host "===== 1/3 本地构建（用于预览检查） =====" -ForegroundColor Cyan
Push-Location $blog
& npx hexo clean 2>&1 | Out-Null
& npx hexo generate 2>&1 | Out-Null
Pop-Location
if (Test-Path (Join-Path $public "index.html")) { Write-Host "[OK] 构建完成" -ForegroundColor Green }
else { Write-Host "[!] 本地构建失败，仍继续提交源码" -ForegroundColor Yellow }

Write-Host "===== 2/3 同步源码到 source 分支 =====" -ForegroundColor Cyan
if (-not (Test-Path $srcrepo)) {
  Push-Location $blog
  & git clone -b source "git@github.com:2412468/2412468.github.io.git" ".src" 2>&1 | Out-Null
  Pop-Location
}
& robocopy $blog $srcrepo /E /XD node_modules public .deploy .src .git vendor /XF db.json /NFL /NDL /NJH /NJS /NP | Out-Null
if ($LASTEXITCODE -ge 8) { Write-Host "[X] 同步文件失败" -ForegroundColor Red; exit 1 }

Push-Location $srcrepo
& git config core.autocrlf false
& git add -A 2>&1 | Out-Null
& git -c user.name="2412468" -c user.email="2412468@users.noreply.github.com" commit -m ("update " + (Get-Date -Format "yyyy-MM-dd HH:mm")) 2>&1 | Out-Null
& git push origin source
$code = $LASTEXITCODE
Pop-Location

if ($code -ne 0) {
  Write-Host "[!] 没有新变化，或推送失败" -ForegroundColor Yellow
  if ($code -ne 0) { Write-Host "[X] 推送失败：检查网络/凭据" -ForegroundColor Red; exit 1 }
}
Write-Host "[OK] 源码已推送，GitHub 会自动编译" -ForegroundColor Green
Write-Host ""
Write-Host "===== 3/3 完成 =====" -ForegroundColor Cyan
Write-Host ("约 1~2 分钟后生效: " + $site) -ForegroundColor Green
Start-Process $site

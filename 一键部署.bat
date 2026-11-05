@echo off
title GitHub Pages Deploy
cd /d "%~dp0"
echo ============================================
echo   GitHub Pages one-click deploy
echo ============================================
echo.
set /p GHUSER=GitHub username: 
set /p GHTOKEN=Personal Access Token: 
echo.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0deploy.ps1" -User "%GHUSER%" -Token "%GHTOKEN%"
echo.
pause

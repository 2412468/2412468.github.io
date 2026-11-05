@echo off
title Stop Local Preview
set "PORT=4000"
echo Looking for process on port %PORT% ...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":%PORT%" ^| findstr "LISTENING"') do (
  echo Killing PID=%%a
  taskkill /PID %%a /F >nul 2>&1
)
echo Done. Port %PORT% released.
ping -n 3 127.0.0.1 >nul
exit /b 0

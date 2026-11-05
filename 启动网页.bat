@echo off
title 本地预览
cd /d "%~dp0public"
set "PORT=4000"
set "PY="

if exist "C:\Users\%USERNAME%\AppData\Local\Programs\Python\Python314\python.exe" set "PY=C:\Users\%USERNAME%\AppData\Local\Programs\Python\Python314\python.exe"
if defined PY goto :found
if exist "C:\Users\%USERNAME%\AppData\Local\Programs\Python\Launcher\py.exe" set "PY=C:\Users\%USERNAME%\AppData\Local\Programs\Python\Launcher\py.exe"
if defined PY goto :found
for %%p in (python.exe) do if not "%%~$PATH:p"=="" set "PY=%%~$PATH:p"
:found

if not defined PY (
  echo [ERROR] Python not found.
  pause
  exit /b 1
)

if not exist "index.html" (
  echo [ERROR] index.html not found. Run publish first.
  pause
  exit /b 1
)

netstat -ano | findstr ":%PORT%" | findstr "LISTENING" >nul 2>&1
if not errorlevel 1 (
  start "" "http://127.0.0.1:%PORT%/"
  exit /b 0
)

echo Starting preview on port %PORT% ...
start "preview" /min cmd /c ""%PY%" -m http.server %PORT% --bind 127.0.0.1"
ping -n 4 127.0.0.1 >nul
start "" "http://127.0.0.1:%PORT%/"
exit /b 0

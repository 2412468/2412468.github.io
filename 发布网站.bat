@echo off
chcp 65001 >nul
title 发布网站
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0tools\publish.ps1"
pause

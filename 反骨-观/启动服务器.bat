@echo off
chcp 65001 >nul
echo ========================================
echo   惊喜贺卡 - 本地服务器启动
echo ========================================
echo.

REM 检查Python是否安装
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo [√] 检测到Python已安装
    echo.
    echo 正在启动本地服务器...
    echo.
    echo ========================================
    echo   访问地址
    echo ========================================
    echo 本机访问: http://localhost:8000
    echo.
    
    REM 获取IP地址
    echo 正在获取IP地址...
    for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /i "IPv4"') do (
        set ip=%%a
        setlocal enabledelayedexpansion
        set ip=!ip:~1!
        echo 手机访问: http://!ip!:8000
        echo.
        echo 提示: 确保手机和电脑在同一WiFi网络
        endlocal
    )
    
    echo ========================================
    echo 按 Ctrl+C 停止服务器
    echo ========================================
    echo.
    python -m http.server 8000
) else (
    echo [×] 未检测到Python
    echo.
    echo 请选择以下方式之一：
    echo 1. 安装Python: https://www.python.org/downloads/
    echo 2. 使用Node.js: 运行 "启动服务器.js"
    echo 3. 直接打开: 双击 index.html 文件
    echo.
    pause
)


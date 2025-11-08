@echo off
chcp 65001 >nul
echo ========================================
echo   获取本机IP地址
echo ========================================
echo.
echo 正在查找你的IP地址...
echo.

for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /i "IPv4"') do (
    set ip=%%a
    set ip=!ip:~1!
    echo 你的IP地址: !ip!
    echo.
    echo 手机访问地址: http://!ip!:8000
    echo.
)

echo ========================================
echo 请确保：
echo 1. 手机和电脑连接在同一个WiFi网络
echo 2. 服务器正在运行（运行 启动服务器.bat）
echo 3. 防火墙已允许Python通过
echo ========================================
echo.
pause


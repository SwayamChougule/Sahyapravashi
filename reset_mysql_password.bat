@echo off
REM MySQL Root Password Reset Tool
REM This script helps reset the MySQL root password to 'root'

REM Change to MySQL bin directory (adjust if your installation path is different)
cd "C:\Program Files\MySQL\MySQL Server 8.0\bin"

REM Stop MySQL Service
echo Stopping MySQL Service...
net stop MySQL80
if %errorlevel% neq 0 (
echo Failed to stop MySQL service. Try running this batch file as Administrator.
pause
exit /b 1
)

REM Start MySQL in Safe Mode
start "MySQL Safe Mode" cmd /k "mysqld --console --skip-grant-tables --shared-memory"
echo MySQL started in safe mode. Waiting 5 seconds...
timeout /t 5 /nobreak >nul

REM Connect and reset password
start "Reset Password" cmd /k "mysql -u root -e "FLUSH PRIVILEGES; ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root'; FLUSH PRIVILEGES; exit;" && echo Password reset to 'root'. Press Enter to continue... && pause"
echo.
echo A new window has opened to reset the password.
echo.
echo Instructions:
1. In the "Reset Password" window, check if you see "Query OK" messages
2. Press Enter when prompted
3. Close all Command Prompt windows
4. Run this batch file again to restart MySQL normally

REM Wait for user to complete
pause

REM Restart MySQL normally
echo.
echo Restarting MySQL normally...
net start MySQL80
if %errorlevel% neq 0 (
echo Failed to start MySQL service.
pause
exit /b 1
)

echo.
echo MySQL password has been reset to 'root' successfully!
echo You can now connect using MySQL Workbench with username 'root' and password 'root'.
pause
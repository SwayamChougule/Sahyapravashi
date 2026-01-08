@echo off
REM Windows batch script to set up the database for Shayapravashi

REM Prompt user for MySQL root password
set /p mysql_password=Enter your MySQL root password: 

REM Run the setup script
mysql -u root -p%mysql_password% < setup_database.sql

REM Check if the script ran successfully
if %errorlevel% equ 0 (
    echo.
    echo Database setup completed successfully!
    echo Default admin login: admin@shayapravashi.com / admin123
    echo Please update your config.js file with your MySQL credentials
) else (
    echo.
    echo Error: Database setup failed!
    echo Please check your MySQL installation and password
)

pause
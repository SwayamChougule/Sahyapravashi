@echo off
REM This batch file runs the setup_database.sql script
REM Make sure you have MySQL installed and added to your system PATH

cls
echo Running database setup script...
echo.
echo Please enter your MySQL root password when prompted
echo.

REM Connect to MySQL and execute the setup script
mysql -u root -p < setup_database.sql

REM Check if the command was successful
if %errorlevel% equ 0 (
    echo.
echo Database setup completed successfully!
echo You can now start the server with: node server.js
echo.
) else (
    echo.
echo Error: Failed to execute the database setup script
echo Please check your MySQL installation and try again
echo.
)

pause
# Full Database Functionality Setup

I've made several changes to help you enable full database functionality for your Shayapravashi project:

## 1. Configuration File

Created a `config.js` file to store your database credentials separately from the main code. This makes it easier to update your MySQL settings without modifying server.js directly.

To use it, simply open `config.js` and update the password field with your actual MySQL root password.

## 2. Database Setup Guide

Created a detailed `DATABASE_SETUP_GUIDE.md` file that walks you through the entire process of:
- Installing MySQL (if not already installed)
- Updating your database configuration
- Running the database setup script
- Starting the server with database support
- Troubleshooting common issues

## 3. Windows Batch Script

Created a `setup_database.bat` file that simplifies the database setup process on Windows. This script:
- Prompts you for your MySQL root password
- Runs the setup_database.sql script automatically
- Shows success or error messages

## 4. Server Configuration

Updated `server.js` to use the configuration from `config.js` instead of hardcoded credentials.

## How to Enable Full Database Functionality

Follow these simple steps:

1. **Install MySQL** (if you haven't already)
2. **Update your credentials**: Edit `config.js` and set your actual MySQL root password
3. **Run the setup script**: Double-click `setup_database.bat` and follow the prompts
4. **Start the server**: Run `node server.js` from the command line

## Default Admin Account

After successful setup, you can log in with these default credentials:
- Email: admin@shayapravashi.com
- Password: admin123

## Important Notes

- For security reasons, never share your `config.js` file or MySQL password
- If you encounter any issues, refer to the `DATABASE_SETUP_GUIDE.md` for troubleshooting tips
- The login redirect to index.html that we implemented earlier will work with the full database setup as well
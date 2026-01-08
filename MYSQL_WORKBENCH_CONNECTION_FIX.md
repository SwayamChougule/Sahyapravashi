# Fixing MySQL Workbench Connection Error: Access Denied for User 'root'@'localhost'

## Overview
This guide will help you resolve the "access denied for user root localhost3306 using yes error" when connecting to MySQL through Workbench. This is a common issue related to password authentication.

## Step 1: Reset MySQL Root Password

### Method 1: Using Command Prompt (Recommended)

1. **Stop MySQL Service**
   - Open Command Prompt as Administrator
   - Run:
     ```
     net stop MySQL80  (or the name of your MySQL service)
     ```

2. **Start MySQL in Safe Mode**
   - Run:
     ```
     cd "C:\Program Files\MySQL\MySQL Server 8.0\bin"
     mysqld --console --skip-grant-tables --shared-memory
     ```
   - Leave this Command Prompt window open

3. **Open Another Command Prompt as Administrator**
   - Connect to MySQL without password:
     ```
     mysql -u root
     ```

4. **Reset Root Password**
   - Run these SQL commands:
     ```sql
     FLUSH PRIVILEGES;
     ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
     FLUSH PRIVILEGES;
     exit;
     ```

5. **Restart MySQL Service**
   - Close the first Command Prompt window (with safe mode)
   - In the second window, run:
     ```
     net start MySQL80
     ```

## Step 2: Configure MySQL Workbench Connection

1. **Open MySQL Workbench**

2. **Create/Edit Connection**
   - Click the "+" icon next to MySQL Connections
   - Fill in these settings:
     - **Connection Name**: localhost
     - **Hostname**: localhost
     - **Port**: 3306
     - **Username**: root
     - **Password**: Click "Store in Vault" and enter 'root'
   
3. **Test Connection**
   - Click "Test Connection" button
   - If successful, click "OK" to save

## Step 3: Verify Database Setup

1. **Connect to MySQL**
   - Click on your localhost connection to connect

2. **Run Setup Script**
   - Open a new query tab
   - Click "File" > "Open SQL Script"
   - Navigate to `setup_database.sql` in your project folder
   - Click "Execute" button or press Ctrl+Shift+Enter

3. **Verify Database and Tables**
   - Run these commands to check if everything was created:
     ```sql
     USE user_info;
     SHOW TABLES;
     SELECT * FROM user_info_table;
     ```

## Step 4: Update Application Configuration

- Ensure your `config.js` file has the correct password:
  ```javascript
  module.exports = {
    db: {
      host: "localhost",
      user: "root",
      password: "root", // Same password you set in Step 1
      database: "user_info"
    }
  };
  ```

## Step 5: Start the Server

- Open Command Prompt in your project folder
- Run:
  ```
  node server.js
  ```

## Common Issues and Solutions

- **Access denied error persists**: 
  - Double-check that you used 'mysql_native_password' authentication plugin
  - Ensure the password in Workbench matches the one you set
  
- **Can't stop MySQL service**: 
  - Use Task Manager to end MySQL processes
  - Or restart your computer
  
- **Server.js fails to connect**: 
  - Verify MySQL service is running
  - Check firewall settings to allow port 3306
  
- **Workbench connection timeout**: 
  - Ensure MySQL service is running
  - Try using 127.0.0.1 instead of localhost

## Additional Notes
- The admin login for the website is: `admin@shayapravashi.com` with password `admin123`
- If you set a different MySQL root password, update it in both Workbench and `config.js`
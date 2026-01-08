# Database Setup Guide for Shayapravashi

Follow these instructions to enable full database functionality for your project.

## Step 1: Install MySQL

If you don't have MySQL installed, download and install it from the official website:
- [MySQL Community Server Downloads](https://dev.mysql.com/downloads/mysql/)

During installation, make sure to remember the root password you set.

## Step 2: Update Database Configuration

1. Open the `config.js` file in your project directory
2. Update the database configuration with your actual MySQL credentials:

```javascript
// Database configuration
module.exports = {
  db: {
    host: "localhost",
    user: "root",
    password: "your_mysql_root_password", // Replace with your actual password
    database: "user_info"
  }
};
```

## Step 3: Run the Database Setup Script

Open a command prompt (Windows) or terminal (macOS/Linux) and execute the following commands:

```bash
# Log in to MySQL as root user
sudo mysql -u root -p  # For macOS/Linux
mysql -u root -p       # For Windows

# When prompted, enter your MySQL root password

# Run the setup script
USE mysql;
SOURCE c:/Users/Prajot/Desktop/shayapravashi (4)/shayapravashi/shayapravashi/setup_database.sql;

# Exit MySQL
EXIT;
```

**Note:** If you get an error about the file path, make sure to use the correct absolute path to your setup_database.sql file.

## Step 4: Start the Server with Database Support

Once the database is set up and configured, start the server using server.js:

```bash
node server.js
```

## Default Admin Account

After running the setup script, you'll have a default admin account:
- Email: admin@shayapravashi.com
- Password: admin123

## Troubleshooting

If you encounter any issues:

1. **Access denied error**: Make sure your MySQL root password in config.js matches what you set during installation
2. **Database not found**: Ensure you ran the setup_database.sql script correctly
3. **Connection refused**: Check if the MySQL server is running

For Windows users, if you're having trouble with the MySQL command line, you can use MySQL Workbench to run the setup script instead:
1. Download and install [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)
2. Connect to your local MySQL server
3. Open the setup_database.sql file
4. Click the "Run" button to execute the script
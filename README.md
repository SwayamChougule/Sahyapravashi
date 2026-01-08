<br />
<div align="center">
  <a href="https://github.com/SwayamChougule/Sahyapravashi">
    <img src="images/sahyapravashi-logo.png" alt="Logo" width="120" height="120">
  </a>

  <h3 align="center">Sahyapravashi</h3>

  <p align="center">
    The Ultimate Gateway to Maharashtra's Fort Heritage
    <br />
    <a href="https://github.com/SwayamChougule/Sahyapravashi/issues">Report Bug</a>
    ·
    <a href="https://github.com/SwayamChougule/Sahyapravashi/issues">Request Feature</a>
  </p>
</div>

## 🏰 About The Project

**Sahyapravashi** is a feature-rich web application dedicated to preserving and promoting Maharashtra's fort heritage. Unlike standard travel sites, this platform serves as a specialized bridge between historical education and modern adventure tourism.

It allows users to explore detailed history, manage personal profiles, and securely book trekking experiences to historic forts like Raigad, Sinhagad, and Pratapgad—all in one seamless interface.

### 🌟 Key Features

* **📚 Comprehensive Fort Library:** Detailed archives including history, difficulty grading, location data, and base village information.
* **🔐 Secure User System:** Full user registration and login functionality using `bcrypt` for data security.
* **🎫 Smart Booking Engine:** An automated system for users to browse itineraries, check pricing, and book trek slots.
* **⚡ Powerful Admin Dashboard:** A dedicated backend panel allowing administrators to:
    * Create, Update, and Delete Fort entries dynamically.
    * Manage Trek Packages and pricing.
    * View and approve/reject Booking requests in real-time.
* **📱 Responsive Design:** Built with Bootstrap 5 to ensure a smooth experience on Mobile, Tablet, and Desktop.

## 🛠️ Technologies Used

This project was built using a robust full-stack architecture:

* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) **Node.js** - Runtime environment
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) **Express.js** - Backend framework
* ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white) **MySQL** - Relational Database
* ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white) **Bootstrap 5** - Frontend styling
* **Multer** - For handling image uploads
* **EJS / HTML5** - Frontend Templating

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js installed on your machine.
* MySQL Server installed and running.

### Installation

1.  **Clone the repository**
    ```sh
    git clone [https://github.com/SwayamChougule/Sahyapravashi.git](https://github.com/SwayamChougule/Sahyapravashi.git)
    ```
2.  **Navigate to the project directory**
    ```sh
    cd Sahyapravashi
    ```
3.  **Install NPM packages**
    ```sh
    npm install
    ```
4.  **Database Setup (Crucial)**
    * Create a new database in MySQL named `user_info`.
    * Import the `setup_database.sql` file provided in the root directory to create the necessary tables.
    * Open `config.js` and update your MySQL password:
        ```js
        password: "YOUR_MYSQL_PASSWORD"
        ```
5.  **Start the server**
    ```sh
    node server.js
    ```
6.  **Explore**
    Open your browser and visit `http://localhost:3000`

## 📁 Folder Structure

```text
Sahyapravashi/
├── config.js           # Database configuration
├── server.js           # Main application entry point
├── setup_database.sql  # Database initialization script
├── public/             # Static files (HTML, CSS, Client-side JS)
├── images/             # Project assets and logos
└── uploads/            # Dynamic image storage for forts/packages

##🤝 Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

📝 License
Distributed under the MIT License.

<p align="center"> Developed with ❤️ by <a href="https://github.com/SwayamChougule">Swayam Chougule</a> </p>

// ======== Dependencies ========
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

// ======== Middleware ========
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Session config
app.use(session({
  secret: "swayam",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, httpOnly: true }
}));

// Static for uploads, public files, and images
app.use("/uploads", express.static("uploads"));
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static("images"));

// ======== Admin Middleware ========
function adminOnly(req, res, next) {
  if (!req.session.user) return res.status(401).json({ message: "Login required" });
  if (req.session.user.role !== "admin") return res.status(403).json({ message: "Admins only" });
  next();
}

// ======== Multer Config (for file uploads) ========
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, "uploads")),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

// ======== AUTH ROUTES (Mock responses for demo) ========

// Signup
app.post("/auth/signup", async (req, res) => {
  const { username, email, password } = req.body;
  
  // Simple validation
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields required" });
  }
  
  if (password.length < 6) {
    return res.status(400).json({ message: "Password must be at least 6 characters long" });
  }
  
  // For demo purposes, simulate successful registration
  // In demo mode, we don't check for duplicate users
  res.json({ message: "User registered successfully" });
});

// Login
app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;
  
  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
  
  // Special handling for admin login in demo mode
  if (email === "admin@shayapravashi.com" && password === "admin123") {
    req.session.user = {
      id: 999,
      username: "admin",
      email: "admin@shayapravashi.com",
      role: "admin"
    };
    return res.redirect('/admin.html');
  }
  
  // For demo purposes, simulate login for regular users
  // In demo mode, we accept any non-admin email/password combination
  req.session.user = {
    id: 1,
    username: "demo",
    email: email,
    role: "user"
  };
  
  // Redirect to index.html after simulated login
  res.redirect('/index.html');
});

// Logout
app.get("/auth/logout", (req, res) => {
  req.session.destroy(() => res.json({ message: "Logged out" }));
});

// ======== FORTS ROUTES (Mock responses) ========

// Add a fort (admin only, with image)
app.post("/api/forts", adminOnly, upload.single("image"), (req, res) => {
  res.json({ message: "Database not connected. Please install MySQL to manage forts." });
});

// Get all forts
app.get("/api/forts", (req, res) => {
  // Return sample forts data
  const sampleForts = [
    {
      id: 1,
      name: "Raigad Fort",
      description: "Historic fort of Chhatrapati Shivaji Maharaj, known for its strategic location and architectural marvel.",
      location: "Raigad, Maharashtra",
      difficulty: "Hard",
      image_url: "/images/raigad.jpg"
    },
    {
      id: 2,
      name: "Sinhagad Fort",
      description: "Famous for the Battle of Sinhagad where Tanaji Malusare fought bravely.",
      location: "Pune, Maharashtra",
      difficulty: "Medium",
      image_url: "/images/sinhagad.jpg"
    },
    {
      id: 3,
      name: "Pratapgad Fort",
      description: "Built by Chhatrapati Shivaji Maharaj, famous for the encounter with Afzal Khan.",
      location: "Satara, Maharashtra",
      difficulty: "Medium",
      image_url: "/images/pratapgad.jpg"
    }
  ];
  res.json(sampleForts);
});

// Get single fort by ID
app.get("/api/forts/:id", (req, res) => {
  const fortId = parseInt(req.params.id);
  const sampleFort = {
    id: fortId,
    name: "Raigad Fort",
    description: "Historic fort of Chhatrapati Shivaji Maharaj, known for its strategic location and architectural marvel.",
    location: "Raigad, Maharashtra",
    difficulty: "Hard",
    image_url: "/images/raigad.jpg"
  };
  res.json(sampleFort);
});

// ======== PACKAGES ROUTES (Mock responses) ========

// Add package (admin, multiple images)
app.post("/api/packages", adminOnly, upload.array("images", 5), (req, res) => {
  res.json({ message: "Database not connected. Please install MySQL to manage packages." });
});

// Get all packages
app.get("/api/packages", (req, res) => {
  // Return sample packages data
  const samplePackages = [
    {
      id: 1,
      name: "Raigad Fort Trek",
      price: 1500.00,
      itinerary: "Day 1: Arrival at base village, Day 2: Trek to Raigad Fort, Day 3: Explore fort and return",
      season: "Winter",
      base_village: "Pachad",
      difficulty: "Hard",
      image_url: "/images/raigad.jpg"
    },
    {
      id: 2,
      name: "Sinhagad Day Trek",
      price: 800.00,
      itinerary: "Early morning trek to Sinhagad, explore the fort, lunch at base village, return by evening",
      season: "All Seasons",
      base_village: "Sinhagad Ghat",
      difficulty: "Medium",
      image_url: "/images/sinhagad.jpg"
    }
  ];
  res.json(samplePackages);
});

// Get single package by ID
app.get("/api/packages/:id", (req, res) => {
  const packageId = parseInt(req.params.id);
  const samplePackage = {
    id: packageId,
    name: packageId === 1 ? "Raigad Fort Trek" : "Sinhagad Day Trek",
    price: packageId === 1 ? 1500.00 : 800.00,
    itinerary: packageId === 1 
      ? "Day 1: Arrival at base village, Day 2: Trek to Raigad Fort, Day 3: Explore fort and return" 
      : "Early morning trek to Sinhagad, explore the fort, lunch at base village, return by evening",
    season: packageId === 1 ? "Winter" : "All Seasons",
    base_village: packageId === 1 ? "Pachad" : "Sinhagad Ghat",
    difficulty: packageId === 1 ? "Hard" : "Medium",
    image_url: packageId === 1 ? "/images/raigad.jpg" : "/images/sinhagad.jpg"
  };
  res.json(samplePackage);
});

// ======== BOOKINGS ROUTES (Mock responses) ========

// User creates booking
app.post("/api/bookings", (req, res) => {
  res.json({ message: "Database not connected. Please install MySQL to enable bookings." });
});

// Admin: view bookings
app.get("/api/bookings", adminOnly, (req, res) => {
  res.json({ message: "Database not connected. Please install MySQL to view bookings." });
});

// Admin: update booking status
app.put("/api/bookings/:id", adminOnly, (req, res) => {
  res.json({ message: "Database not connected. Please install MySQL to manage bookings." });
});

// Admin: delete booking
app.delete("/api/bookings/:id", adminOnly, (req, res) => {
  res.json({ message: "Database not connected. Please install MySQL to manage bookings." });
});

// ======== Admin Panel ========
app.get("/admin.html", adminOnly, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "admin.html"));
});

// ======== Start Server ========
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📁 Static files served from: ${path.join(__dirname, "public")}`);
  console.log(`⚠️  Database not connected - using mock data`);
  console.log(`🔧 To enable full functionality, install MySQL and run: mysql -u root -p < setup_database.sql`);
});

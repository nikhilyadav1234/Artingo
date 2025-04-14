// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/artingo").then(() => {
//   console.log("🌿 Connected to MongoDB");
// }).catch((err) => {
//   console.error("❌ MongoDB connection error:", err);
// });

// // User Schema
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String
// });
// const User = mongoose.model("User", userSchema);

// // Sign Up Endpoint
// app.post("/signup", async (req, res) => {
//   const { name, email, password } = req.body;
//   const existingUser = await User.findOne({ email });

//   if (existingUser) {
//     return res.status(409).send("User already exists");
//   }

//   const user = new User({ name, email, password });
//   await user.save();
//   res.status(201).send("User created successfully");
// });

// // Login Endpoint
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email, password });

//   if (!user) {
//     return res.status(401).send("Invalid email or password");
//   }

//   res.status(200).send("Login successful");
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express(); // ✅ Define app before using it

const authRoutes = require('./routes/auth'); // ✅ Now it's safe to use

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/artingoDB')
  .then(() => console.log('🌿 Connected to MongoDB'))
  .catch(err => console.log(err));

// Routes
app.use('/api/auth', authRoutes); // ✅ This is now after app is defined

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));




// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const authRoutes = require('./routes/auth');

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json()); // for JSON payloads (like Postman or frontend JS)
// app.use(bodyParser.urlencoded({ extended: true })); // for traditional HTML forms

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/artingoDB')
//   .then(() => console.log('🌿 Connected to MongoDB'))
//   .catch(err => console.log(err));

// // Routes
// app.use('/api/auth', authRoutes);

// const PORT = 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

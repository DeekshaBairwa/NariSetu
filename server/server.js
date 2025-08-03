// server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/db.js'; // ✅ Use connectDB here
import authRoutes from './routes/auth.routes.js';
import feedbackRoutes from './routes/feedbackRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
    origin: "http://localhost:5173",  // frontend port
    credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/feedback', feedbackRoutes);

const path = require("path");

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


// Start the server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

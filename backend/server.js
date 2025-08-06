const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const documentRoutes = require('./routes/documents');

// Use routes
app.use('/api/documents', documentRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Document AI Backend API' });
});
app.get('/', (req, res) => {
  res.json({ message: 'Document AI Backend API' });
});
// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
}); 
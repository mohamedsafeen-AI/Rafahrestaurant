const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

// Import routes
const menuRoutes = require('./routes/menuRoutes');
const reservationRoutes = require('./routes/reservationRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware
const cors = require('cors');
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

// Log all incoming requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  console.log('Headers:', req.headers);
  next();
});

// Log all requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// API routes
app.use('/api/menu', menuRoutes);
app.use('/api/reservations', reservationRoutes);

// SMS endpoint
app.post('/send-sms', async (req, res) => {
  try {
    console.log('SMS Request received - Full body:', req.body);
    
    const { phone, name, address } = req.body;
    
    // Log the received data
    console.log('SMS Request received - Extracted data:', { phone, name, address });
    
    // For now, just return success without actually sending SMS
    res.json({ 
      message: `Reservation confirmed! Your table is booked. We will contact you at ${phone} for confirmation.`,
      ownerContact: {
        name: "Restaurant Owner",
        phone: process.env.OWNER_PHONE || "+1 (555) 987-6543"
      }
    });
  } catch (err) {
    console.error("SMS Error:", err);
    res.status(500).json({ message: "Failed to process reservation" });
  }
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend', 'dist', 'index.html'));
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Server Error',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
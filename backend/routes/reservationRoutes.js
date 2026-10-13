const express = require('express');
const router = express.Router();

// Sample reservations data - in a real app, this would be stored in a database
let reservations = [];

// Get all reservations
router.get('/', (req, res) => {
  res.json({
    success: true,
    count: reservations.length,
    data: reservations
  });
});

// Create a new reservation
router.post('/', (req, res) => {
  const { name, email, phone, date, time, guests, message } = req.body;
  
  // Basic validation
  if (!name || !email || !phone || !date || !time || !guests) {
    return res.status(400).json({
      success: false,
      message: 'Please provide all required fields'
    });
  }
  
  // Phone number validation
  const phoneRegex = /^\+?[1-9]\d{9,14}$/;
  if (!phoneRegex.test(phone.replace(/\s+/g, ''))) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid phone number'
    });
  }
  
  // Create new reservation
  const newReservation = {
    id: Date.now().toString(),
    name,
    email,
    phone,
    date,
    time,
    guests,
    message: message || '',
    status: 'pending',
    createdAt: new Date().toISOString()
  };
  
  // Add to reservations array
  reservations.push(newReservation);
  
  // In a real app, you would send an SMS confirmation using Twilio
  // sendSmsConfirmation(newReservation);
  
  // Owner's contact information
  const ownerContact = {
    name: "Restaurant Owner",
    phone: process.env.OWNER_PHONE || "+919384798122"
  };
  
  res.status(201).json({
    success: true,
    data: newReservation,
    ownerContact: ownerContact
  });
});

// Update reservation status
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  
  // Find reservation index
  const index = reservations.findIndex(reservation => reservation.id === id);
  
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Reservation not found'
    });
  }
  
  // Update status
  reservations[index].status = status;
  
  res.json({
    success: true,
    data: reservations[index]
  });
});

// Delete a reservation
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  
  // Find reservation index
  const index = reservations.findIndex(reservation => reservation.id === id);
  
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Reservation not found'
    });
  }
  
  // Remove reservation
  const deletedReservation = reservations.splice(index, 1)[0];
  
  res.json({
    success: true,
    data: deletedReservation
  });
});

// Helper function to send SMS confirmation (commented out for now)
/*
const sendSmsConfirmation = (reservation) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require('twilio')(accountSid, authToken);
  
  const message = `Thank you for your reservation at Rafah Restaurant, ${reservation.name}! Your table for ${reservation.guests} is confirmed for ${reservation.date} at ${reservation.time}. We look forward to serving you.`;
  
  client.messages
    .create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: reservation.phone
    })
    .then(message => console.log(`SMS sent: ${message.sid}`))
    .catch(err => console.error(`Error sending SMS: ${err}`));
};
*/

module.exports = router;
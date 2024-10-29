const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');
const { protect } = require('../middlewares/authMiddleware');

// // Protect routes
// router.use(protect);

// Reserve a seat
router.post('/reserve',protect, reservationController.reserveSeat);

// Route to cancel a reservation, accessible only by authenticated users
router.post('/cancel-reservation', protect, reservationController.cancelReservation);

module.exports = router;

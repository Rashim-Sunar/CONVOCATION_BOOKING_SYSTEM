const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const { protect, roleCheck } = require('../middlewares/authMiddleware');



router.route('/').get(eventController.getAllEvents); // All users can get all events

// Protect routes and restrict access to admins
router.use(protect); // Apply the protect middleware to all routes
router.route('/create').post(roleCheck(['admin']), eventController.createEvent);    // Admin can create a new event

router.route('/:id').get(eventController.getEventById);         // All users can get an event by ID
router.route('/update/:id').patch(roleCheck(['admin']), eventController.updateEvent)  // Admin can update an event by ID
router.route('/delete/:id').delete(roleCheck(['admin']), eventController.deleteEvent); // Admin can delete an event by ID

module.exports = router;

const express = require('express');
const { protect, roleCheck } = require('../middleware/authMiddleware');
const eventController = require('../controllers/eventController');

const router = express.Router();

router.route('/create')
    .post(protect, roleCheck(['admin']), eventController.createEvent);
    
router.route('/').get(eventController.getAllEvents);

module.exports = router;

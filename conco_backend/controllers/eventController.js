const Event = require('../models/Event');
const Seat = require('../models/Seat');

// Create a new event and associated seats
exports.createEvent = async (req, res) => {
    const { name, date, location, description, totalSeats, section, rows, seatsPerRow } = req.body;

    try {
        // Create the event
        const event = await Event.create({ name, date, location, description, totalSeats });

        // Automatically generate seats for the event
        const seats = [];

        // Loop through sections and rows to generate seat numbers
        for (let row = 1; row <= rows; row++) {
            for (let seatNumber = 1; seatNumber <= seatsPerRow; seatNumber++) {
                seats.push({
                    seatNumber: `${event._id}-${section}-${row}-${seatNumber}`, // e.g., "VIP-1-1"
                    section,
                    row: row.toString(),
                    eventId: event._id // Link the seat to the created event
                });
            }
        }

        // Bulk insert generated seats into the database
        const createdSeats = await Seat.insertMany(seats);

        res.status(201).json({
            status: 'success',
            data: {
                event,
                seats: createdSeats
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'fail',
            message: error.message
        });
    }
};


// Get all events
exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json({
            status: 'success',
            data: { events }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};

// Get a single event by ID
exports.getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({
                status: 'fail',
                message: 'Event not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: { event }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};

// Update an event
exports.updateEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!event) {
            return res.status(404).json({
                status: 'fail',
                message: 'Event not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: { event }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};

// Delete an event
exports.deleteEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
  
        if (!event) {
            return res.status(404).json({
                status: 'fail',
                message: 'Event not found'
            });
        }

        res.status(200).json({
            status: 'success',
            message: "Event deleted successfully",
        });

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};

const Seat = require('../models/Seat');
const Reservation = require('../models/Reservation');

// Reserve a seat for a user
exports.reserveSeat = async (req, res) => {
    const { seatId, userId, eventId } = req.body; // Get seat ID, user ID, and event ID from the request body

    try {
        // Find the seat by its ID and populate the associated event
        const seat = await Seat.findById(seatId);
        
        // Check if the seat exists
        if (!seat) {
            return res.status(404).json({ status: 'fail', message: 'Seat not found' });
        }

        // Check if the seat is reserved
        if (seat.isReserved) {
            return res.status(400).json({ status: 'fail', message: 'Seat is already reserved' });
        }

        // Check if the seat belongs to the correct event
        if (String(seat.eventId) !== eventId) {
            return res.status(400).json({ status: 'fail', message: 'Seat does not belong to the specified event' });
        }

        // Reserve the seat
        seat.isReserved = true;
        seat.reservedFor = userId; // Link the seat to the user

        // Save the updated seat
        await seat.save();

        // Create a new reservation record
        const reservation = await Reservation.create({
            user: userId,
            seat: seat._id,
            event: eventId,
            reservedAt: Date.now() // Consider using Date.now() directly in the schema if needed
        });

        res.status(201).json({
            status: 'success',
            data: {
                reservation: {
                    id: reservation._id,
                    seat: seat.seatNumber, // Just return relevant info
                    reservedAt: reservation.reservedAt,
                    event: eventId // Optionally return event info
                }
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'fail', message: 'Internal server error' });
    }
};


// Cancel a reservation
exports.cancelReservation = async (req, res) => {
    const { reservationId } = req.body; // Get reservation ID from the request body
    const userId = req.user.id; // Assume you get the user ID from the authenticated user's token

    try {
        // Find the reservation by its ID and populate the seat field
        const reservation = await Reservation.findById(reservationId).populate('seat');

        // Check if the reservation exists
        if (!reservation) {
            return res.status(404).json({ status: 'fail', message: 'Reservation not found' });
        }

        // Check if the reservation belongs to the user
        if (reservation.user.toString() !== userId) {
            return res.status(403).json({ status: 'fail', message: 'You do not have permission to cancel this reservation' });
        }

        // Find the associated seat
        const seat = reservation.seat;

        // Mark the seat as available again
        seat.isReserved = false;
        seat.reservedFor = null; // Clear the reservedFor field

        // Save the updated seat
        await seat.save();

        // Delete the reservation record
        await Reservation.findByIdAndDelete(reservationId);

        res.status(200).json({
            status: 'success',
            message: 'Reservation cancelled successfully',
            data: {
                reservationId
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'fail', message: error.message });
    }
};

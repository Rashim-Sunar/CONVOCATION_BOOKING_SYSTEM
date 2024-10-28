const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },

    seat: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Seat', 
        required: true 
    },

    event: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Event', 
        required: true
     },

    reservedAt: { 
        type: Date, 
        default: Date.now 
    },
    
}, {
    timestamps: true
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;

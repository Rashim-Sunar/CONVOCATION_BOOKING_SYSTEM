const mongoose =   require('mongoose');

const seatSchema = new mongoose.Schema({
    seatNumber: { 
        type: String, 
        required: true, 
        unique: true 
    },

    section: { type: String, 
        required: true 
    },  // e.g., "VIP", "General", "Family"

    row: { 
        type: String, 
        required: true 
    },

    isReserved: { 
        type: Boolean, 
        default: false 
    },

    reservedFor: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        default: null 
    },
}, {
    timestamps: true
});

const Seat =  mongoose.model('Seat', seatSchema);
module.exports = Seat;

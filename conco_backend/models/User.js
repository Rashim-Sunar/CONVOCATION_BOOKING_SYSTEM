const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true 
    },

    password: { 
        type: String, 
        required: true 
    },  // Store hashed password for security

    role: { 
        type: String, 
        enum: ['admin', 'guest', 'faculty', 'student'], 
        required: true 
    },

    email: {
        type: String,
        required: [true, "Enter your email!"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Please enter a valid email"]
    },

}, {
    timestamps: true
});

// Pre-save hook to hash password before saving
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

//Creating a function to compare the password which we are receing in the body with the password that is saved in database.
//Creating a instance method -> A instance method is available to all the documents of a collection. i.e. to all the instance of userModel(this file).
userSchema.methods.comparePasswordInDB = async function(pswd, pswdDB){
    return bcrypt.compare(pswd, pswdDB);
}

const User =  mongoose.model('User', userSchema);
module.exports = User;
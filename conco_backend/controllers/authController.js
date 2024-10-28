const User = require('../models/User');
const jwt = require('jsonwebtoken');

const signToken = (id) => {
    return jwt.sign({id}, process.env.SECRET_STR, {
        expiresIn: process.env.EXPIRING_DAY
    })
}

exports.signup = async(req, res, next) => {
    try {
        const {email} = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create a new user
        const newUser = await User.create(req.body);

        const token = signToken(newUser._id);

            //Using cookie for sending  JWT...
        const options = {
          maxAge: process.env.EXPIRING_DAY,
          httpOnly: true
        };

        res.cookie('jwt', token, options); //In similar way, we can set cookies in other route handlers..

        newUser.password = undefined; //Not sending password in respond, just making it undefined, not removing from database..

        res.status(201).json({
            status: 'success',
            token,
            data: {
                user: newUser
            }
        })
    } catch (error) {
        console.error(error);

        res.status(500).json({
            status: 'fail', 
            message: 'Server error' 
        });
    } 
}


exports.signin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                status: 'fail', 
                message: 'Invalid credentials' 
            });
        }

        // Compare password
        const isMatch = await user.comparePasswordInDB(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                status:'fail', 
                message: 'Invalid credentials' 
            });
        }

        // Generate JWT
        const token = signToken(user._id);        

        res.json({ 
            status: 'success', 
            token, 
            user: {
                id: user._id, 
                username: user.username, 
                role: user.role
             } 
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'fail', 
            message: 'Server error' 
        });
    }
}
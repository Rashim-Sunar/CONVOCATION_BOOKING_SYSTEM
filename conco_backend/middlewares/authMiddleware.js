const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token){
            return res.status(401).json({
               status: "fail", 
               message: 'Not authorized' 
             });
        }

        const decoded = jwt.verify(token, process.env.SECRET_STR);
        req.user = await User.findById(decoded.id);
        next();
    } catch (error) {
        res.status(401).json({
            status: "fail",
             message: 'Token failed, authorization denied' 
        });
    }
};

// Role check middleware
const roleCheck = (roles) => (req, res, next) => {
    if (!roles.includes(req.user.role)) {
        return res.status(403).json({
            status: "fail",
             message: 'Permission denied' 
        });
    }
    next();
};


module.exports = { protect, roleCheck };

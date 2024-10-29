const dotenv = require('dotenv');
dotenv.config({path:"./config.env"});
const port = process.env.PORT || 3000;
const url = process.env.CONNECT_STR;
const mongoose = require('mongoose');

const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.json());

const authRouter = require("./routes/authRouter");
// const { protect, roleCheck } = require('./middlewares/authMiddleware');
const eventRouter = require('./routes/eventRouter');
const reservationRouter = require('./routes/reservationRouter');

app.use("/api/auth", authRouter);

app.use("/api/events", eventRouter);

app.use("/api/reservation", reservationRouter);

// Example of a protected route with role-based access
// app.get('/api/admin', protect, roleCheck(['admin']), (req, res) => {
//     res.json({ message: 'Welcome, Admin!' });
// });

// app.get('/api/faculty', protect, roleCheck(['faculty', 'admin']), (req, res) => {
//     res.json({ message: 'Faculty or Admin access granted!' });
// });


mongoose.connect(url, {
    useNewUrlParser: true,
}).then((con)=>{
    // console.log(con);
    console.log("Database connected successfully");
})
.catch((err)=>{
   console.log("Error conneting to databse");
 });

app.listen(port,()=>{
    console.log("Server has started on port",port)
});


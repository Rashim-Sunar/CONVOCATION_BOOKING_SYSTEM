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
app.use(bodyParser.json());

const authRouter = require("./routes/authRouter");
app.use(express.json());

app.use("/api/auth", authRouter);

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


require('dotenv').config();  // required to process.env 

const express = require('express');
const app = express();
const mongoose = require('mongoose');


//Connect to local mongodb database
mongoose.connect(process.env.LOCAL_DATABASE_URL);
const db = mongoose.connection
db.on('error', () => console.error(error));                         //in case of connection error display error 
db.once('open', () => console.log("Connected to Database"))         //display message if connected sucessfully

//Connect to mongodb in cloud


//Server 
app.listen(3000, () => console.log('Server Running'));

//Middleware
app.use(express.json());

//Routes
const sensorsRouter = require('./routes/sensors')
app.use('/sensors', sensorsRouter)                                 // same as localhost:3000/sensors
require('dotenv').config();  // required to process.env 

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');  //use to access API resources witch fetch (no-cors property in fetch not working)


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

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


//Routes
const sensorsRouter = require('./routes/sensors')
app.use('/sensors', sensorsRouter)                                 // same as localhost:3000/sensors
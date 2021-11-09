const express = require('express');
const router = express.Router();
const sensorData = require('../models/sensorData');

//Routes
//Getting all
router.get('/', async (req, res) => {
    try {
      const allData = await sensorData.find();     // get all data
      res.json(allData);  //get all data as a response  
    } catch (err) {
      res.status(500).json({ message: err.message });  
    }
});

//Getting one
router.get('/:id', getData, (req, res) => {
    res.json(res.data);
});

//Creating one - for now dummy data created by user, later data from sensors
router.post('/', async (req, res) => {
    const data = new sensorData({
        temp: (Math.floor(Math.random() * (30 - 15 + 1) + 15)),     // for create random temp, later data from sensor
        humidity: req.body.humidity,
        pressure: req.body.pressure,
        lightIntensity: req.body.lightIntensity
        })
    try {
        const newData = await data.save();
        res.status(201).json(newData);
        }

     catch(err) {
        res.status(400).json({message: err.message});
    }
});
//Updating one - not used in this project
/*
router.patch('/:id', (req, res) => {
    
});
*/

//Deleting one
router.delete('/:id', getData, async (req, res) => {
    try {
        await res.data.remove();
        res.json({message: 'Deleted'});
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});

//Delete all
router.delete('/', async (req, res) => {
    try {
      const allData = await sensorData.deleteMany();     // delete all data
      res.json(allData); 
    } catch (err) {
      res.status(500).json({ message: err.message });  
    }
});


// middleware function
async function getData (req, res, next) {
    let data
    try {
        data = await sensorData.findById(req.params.id);
        if ( data == null) {
            return res.status(404).json({message: 'Cannot find data'});
        }
    } catch (err) {
        return res.status(500).json({message: err.message});
    }

    res.data = data;
    next();
};


module.exports = router;        //export middleware module  
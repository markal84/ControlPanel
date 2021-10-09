const mongoose = require('mongoose');

//Schema of sensors data ( for now dummy data, when real data from sensors will be send can be modified)
const sensorsDataSchema = new mongoose.Schema({
    created: {
        type: Date,
        required: true,
        default: Date.now
    },
    temp: {
        type: Number,
        required: true
    },
    humidity: {
        type: Number,
        required: true
    },
    pressure: {
        type: Number,
        required: true
    },
    lightIntensity: {
        type: Number
    }

});

module.exports = mongoose.model('sensorData', sensorsDataSchema);
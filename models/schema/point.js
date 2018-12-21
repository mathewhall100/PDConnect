const mongoose = require("mongoose")
const Schema = mongoose.Schema

const pointSchema = new Schema({

    date: {type: Date, default: Date.now},
    points_change: {type: Number},
    reason_change: {type: String},
    points_current: {type: Number}

});

module.exports = pointSchema
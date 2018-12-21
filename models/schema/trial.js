const mongoose = require("mongoose")
const Schema = mongoose.Schema

const trialSchema = new Schema({
    update_date: {type: Date, default: Date.now},
    current_trial: {
        key: {type: String},
        center: {type: String},
        date_registered: {type: Date},
        date_started: {type: Date},
    },
    previous_trials: [{
        key: {type: String},
        center: {type: String},
        date_started: {type: Date},
        completed: {type: String, Enum: ["completed", "withdrew"]},
        date_withdrew: {type: Date},
        date_completed: {type: Date},
    }]

});

module.exports = trialSchema

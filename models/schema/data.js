const mongoose = require("mongoose")
const Schema = mongoose.Schema

const dataSchema = new Schema({

    update_date: {type: Date, default: Date.now},
    update_type: {type: String, enum: ["scheduled", "adhoc"]},
    family: [{type: String}],
    family_complete: [{type: String}],
    meds: [{type: String}],
    meds_previous: [{type: String}],
    meds_side_effects: [{type: String}],
    surgeries: [{type: String}],
    adl: {type: String},
    motor_symptoms: [{type: String}],
    non_motor_symptoms: [{type: String}]

});

module.exports = dataSchema
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const focus_groupSchema = new Schema({
    
    update_date: {type: Date, default: Date.now},
        current_focus_groups: [{
            key: {type: String},
            sponsor: {type: String},
            location: {type: String},
            date_started: {type: Date},
            num_sessions: {type: Number},
        }],
        previous_focus_groups: [{
            key: {type: String},
            sponsor: {type: String},
            location: {type: String},
            date_started: {type: Date},
            date_ended: {type: Date},
            num_sessions_attended: {Type: Number}
        }],

});

module.exports = focus_groupSchema
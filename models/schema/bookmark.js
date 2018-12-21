const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookmarkSchema = new Schema({
    
    update_date: {type: Date, default: Date.now},
    treatments: [{type: String}],
    trials: {type: String},
    focus_groups: {type: String},
    articles: {type: Date},
    
});

module.exports = bookmarkSchema
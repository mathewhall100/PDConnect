const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dataSchema = require("./schema/data")
const trialSchema = require("./schema/trial")
const focus_groupSchema = require("./schema/focus_group")
const bookmarkSchema = require("./schema/bookmark")
const pointSchema = require("./schema/point")

const user_dataSchema = new Schema({

    user_info_ref: {type: Schema.Types.ObjectId, ref: 'user_info'},
    user_info_id: {type:String },

    data: {type: [dataSchema], required: [true, "Initiasl user data required"] },

    trials: (trialSchema),

    focus_groups: (focus_groupSchema),

    bookmarks: [bookmarkSchema],
       
    points: [pointSchema],
    
    },

    { timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'} }

);

let user_data = mongoose.model('user_data', user_dataSchema);

module.exports = user_data
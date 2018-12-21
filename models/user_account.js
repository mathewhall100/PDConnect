const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookmarkSchema = require("./schema/bookmark")
const pointSchema = require("./schema/point")

const user_accountSchema = new Schema({

    user_info_ref: {type: Schema.Types.ObjectId, ref: 'user_info'},
    user_info_id: {type:String },

    last_update: {type: Date, default: Date.now},
    member_status: {type: String, enum: ["bronze", "silver", "gold", "platinum"] },
    bookmarks: [bookmarkSchema],
    points: [pointSchema],

    
    },

    { timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'} }

);

let user_account = mongoose.model('user_account', user_accountSchema);

module.exports = user_account
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user_dataSchema = new Schema({

    user_info_ref: {type: Schema.Types.ObjectId, ref: 'user_info'},
    user_info_id: {type:String },

    family: [{type: String}],
    meds: [{type: String}],
    surgeries: [{type: String}],
    adl: {type: String},
    motor_symptoms: [{type: String}],
    non_motor_symptoms: [{type: String}]
},

{ timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'} }

);

// mongoose error handling middleware function
handleError = (error, doc, next) => {
    console.log('Operation failed')
    console.log(`Error name: ${error.name} + errror code: ${error.come}`)
    if (error.name === "ValidationError") {
        next(new Error("New/updated document failed mongoose validation."))
    } else {
        next()
    }
}

// add post types that will be handled by error code (e.g. save, findOneAndUpdate etc)
user_dataSchema.post('save', handleError);

let user_data = mongoose.model('user_data', user_dataSchema);

module.exports = user_data
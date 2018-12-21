const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user_infoSchema = new Schema({

    date_registered: {type: Date, default: Date.now},
    user_data_ref: {type: Schema.Types.ObjectId, ref: 'user_data'},
    user_data_id: {type: String },
    user_account_ref: {type: Schema.Types.ObjectId, ref: 'user_account'},
    user_account_id: {type: String },

    email: { type: String, required: [true, "Error: email address required"],
        validate: {
            validator: function(val) {
                //should be a valid email with @ and .
                let re = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
                return  re.test(val)
            },
            message: props => `${props.value} is not a valid email address.`
        },
    },

    password: { type: String, required: [true, "Error: password is required"],
        validate: {
            validator: function(val) {
                // 8 or more characters
                return (val.length > 7)
            },  
            message: props => `${props.value} is not a valid password.`
        },
     },

    firstname: { type: String, 
        validate: {
            validator: function(val) {
                //should be between 2 and 30 characters and contain only letters
                let re = /^\d*[a-zA-Z][a-zA-Z\d\s]{2,30}$/
                return re.test(val)
            },
            message: props => `${props.value} is not a valid firstname!`
        },

    },

    lastname: { type: String, 
        validate: {
            validator: function(val) {
                //should be between 2 and 30 characters and contain only letters and hyphen,apostrophe
                let re = /^\d*[a-zA-Z][\'\-a-zA-Z\d\s]{2,30}$/
                return re.test(val)
            },
            message: props => `${props.value} is not a valid lastname!`
        },

    },

    age: {type: Number, required: [true, "Error: user age required"],
        validate: {
            validator: function(val) { 
                // between 18 and 100
                return (val > 18 && val < 100)
            },
            message: props => `${props.value} years is not a valid age (allowed range is 18 - 100)`
        },
    },

    dob: { type: String,
        validate: {
            validator: function(val) {
                // mm/dd/yy format
                let re = /^^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
                return re.test(val)
            },
            message: props => `${props.value} is not a valid date of birth (mm/dd/yyyy format)!`
        },
    }, 

    sex: { type: String, enum: ["male", "female"], required: [true, "Error: user sex required"] },

    race: { type: String, enum: ["white", "pacific islander", "black or african american", "asian", "american indian or alaska native", "hispanic or latino or spanish origin", "other"], required: [true, "Error: user race/ethnicity required"] },

    year_diagnosis: { type: Number, required: [true, "Error: user year of diagnosis required"], 
        validate: {
            validator: function(val) {
                // 4 figures bwteen 1950 and current
                return (val > 1950 && val < 2020)
            },
            message: props => `${props.value} year diagnosis must be between 1950 and 2019!`
        },
    }, 

    year_symptoms: { type: Number,
        validate: {
            validator: function(val) {
                // 4 figures bwteen 1950 and current
                return (val > 1950 && val < 2020)
            },
            message: props => `${props.value} year diagnosis must be between 1950 and 2019!`
        },
    },

    year_treatment: { type: Number, required: [true, "Error: user year treatment began required"], 
        validate: {
            validator: function(val) {
                // 4 figures bwteen 1950 and current
                return (val > 1950 && val < 2020)
            },
            message: props => `${props.value} year diagnosis must be between 1950 and 2019!`
        },
    },

   zip: { type: String, 
        validate: {
            validator: function(val) {
                // mm/dd/yy format
                let re = /^(?!0{3})[0-9]{3,5}$/
                return re.test(val)
            },
        },
        message: props => `${props.value} is not a valid zip code!`
    },
},  

    { timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'} }

);

// mongoose error handling middleware function

handleError = (error, doc, next) => {
    console.log('Operation failed') 
    console.log(`${error}`)
    if (error.name === "ValidationError") {
        next(new Error("New/updated document failed mongoose validation."))
    } else {
        next()
    }
}

// add post types that will be handled by error code (e.g. save, findOneAndUpdate etc)
user_infoSchema.post('save', handleError);
user_infoSchema.post('findOneAndUpdate', handleError);

const user_info = mongoose.model('user_info', user_infoSchema);

module.exports = user_info

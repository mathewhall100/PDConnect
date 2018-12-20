const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// Database name = 'pdconnectdb'
// This fiel empties the respective collections and inserts the seed data below
// Run via command 'node scripts/seedDB'
// Will exit back to command line once seed script run

// connect to Mongo DB 'pdconnectdb'
mongoose.connect(
    process.env.MongoDB_URI || "mongodb://localhost:27017/pdconnectdb", { useNewUrlParser: true })
    .then(
        (res) => {
            console.log("Connected to databas 'pdconnectdb' successfully")
        }
    ).catch(() => {
        console.log("Connection to database failed")
    })

// user_info seeds

const user_infoSeed = [
    {
        date_registered: new Date(),
        email: "jolly.roger@pirate.com",
        password: "treasuremap",
        firstname: "longjohn",
        lastname: "silver",
        age: 60,
        dob: "1959",
        sex: "male",
        race: "white",
        year_diagnosis: 2000,
        year_symptoms: 1999,
        year_treatment: 2003,
        zip: "44139"
    }
]

// Insert seed data into respective collections

db.user_info
.remove({})
.then(() => db.user_info.collection.insertMany(user_infoSeed))
    .then(data => {
        console.log(data.insertedCount + " user_info collection documents inserted")
})


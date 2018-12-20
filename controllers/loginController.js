const db = require("../models");

module.exports = {


    // Find user by email and password
    findByLogin: function(req, res) {
        console.log("Login controller called to 'find by login' ", req.body)
        db.user_info
        .find({email: req.body.email, password: req.body.password})
        .populate("user_data_ref")
        .then(result => {
            console.log("RESULT:", result)
                res.json(result)
        })
        .catch(err => {
            console.log(`CONTROLLER ERROR: ${err}`)
            res.status(422).json(err)
        })
    }
}
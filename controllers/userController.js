const db = require("../models");

module.exports = {

    // Fetch personal information for all users
    fetchAll: function(req,res) {
        console.log("User_info controller called to 'fetch all'")
        db.user_info
        .find( {} )
        .sort( {"user_info": 1} )
        .then(userList => {
            console.log("RESULT:", userList)
            res.json(userList)
        })
        .catch(err => {
            console.log(`CONTROLLER ERROR: ${err}`)
            res.status(422).json(err)
        })
    },


    // Find user by Id & populate with data.
    findById: function(req,res) {
        console.log("User_info controller called to 'fetch all'")
        db.user_info
        .find( {id} )
        .populate("user_data_ref",  "user_account_ref")
        .then(result=> {
            console.log("RESULT:", result)
            res.json(result)
        })
        .catch(err => {
            console.log(`CONTROLLER ERROR: ${err}`)
            res.status(422).json(err)
        })
    },

    // Save new user record
    create: function(req, res) {
        console.log("User controller called to 'create', ", req.body)
        let d = req.body
        let user = new db.user_info({
                date_registered: d.date_registered,
                email: d.email,
                password: d.password,
                age: d.age,
                sex: d.sex,
                race: d.race,
                year_diagnosis: d.year_diagnosis,
                year_treatment: d.year_treatment }
        )
        user.save()
        .then(resInfo => {
            user = new db.user_data({  
                user_info_ref: resInfo._id,
                user_info_id: resInfo._id,
                data: [{
                    family: d.family,
                    meds: d.meds,
                    surgeries: d.surgeries,
                    adl: d.adl,
                    motor_symptoms: d.motor_symptoms,
                    non_motor_symptoms: d.non_motor_symptoms }]
                })
            user.save()
            .then(resData => {
                user = new db.user_account({
                    member_status: "bronze",
                    points: [{
                        points_current: 100, 
                        points_change: 0,
                        change_reason: "" }]
                    })
                user.save()
                .then(resAcct => {
                    db.user_info
                    .findOneAndUpdate(
                        {_id: resInfo._id},
                        {$set: {
                            "user_data_ref": resData._id,
                            "user_data_id": resData._id,
                            "user_account_ref": resAcct._id,
                            "user_account_id": resAcct._id 
                        }}
                    )
                    .then(resRef => {
                        console.log("RESULT INFO: ", resInfo)
                        console.log("RESULT DATA: ", resData)
                        console.log("RESULT ACCOUNT: ", resAcct)
                        console.log("RESULT REF: ", resRef)

                        res.json(resInfo + resData + resAcct + resRef)
                    })  
                    .catch(err => {
                        console.log(`CONTROLLER ERROR: ${err}`)
                        res.status(422).json(err)
                    })  
                })
            })
        })
    }


} // end of module.export

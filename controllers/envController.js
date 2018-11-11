require('dotenv').config()
require('./../server')

console.log("SEC KEY IN ENV CONTROLLER  : " , process.env.SECRET_KEY);
module.exports = {

    // fetch user id from 'sub'
    findAll: function (req, res) {
        console.log("env controller called to 'envLookup' ");
        res.json(process.env.SECRET_KEY);
    }
}
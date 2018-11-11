require('dotenv').config()
require('./../server')

console.log("test if we get dot env .. " , process.env.MAILER_USER);
module.exports = {
    GOOGLE_API_KEY: process.env.MAILER_GOOGLE_API_KEY,
    CLIENT_ID: process.env.MAILER_CLIENT_ID,
    CLIENT_SECRET: process.env.MAILER_CLIENT_SECRET,
    REFRESHTOKEN: process.env.MAILER_REFRESHTOKEN,
    ACCESSTOKEN: process.env.MAILER_ACCESSTOKEN,
    USER: process.env.MAILER_USER,
    PASS: process.emit.MMAILER_PASS
}
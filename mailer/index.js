
const nodemailer = require('nodemailer');
require('dotenv').config();
require('./../server')

console.log("SEC KEY in mailer index : ", process.env.SECRET_KEY);

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
});

const send = ({ email, name, text }) => {
    console.log("in send function");
    const from = name && email ? `${name} <${email}>` : `${name || email}`
    console.log("uemail : ", process.env.MAILER_USER);
    const message = {
        from,
        to: 'sk.tan97@gmail.com',
        subject: `New message from ${from}`,
        text,
        replyTo: from
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
} 
module.exports = {
    send: send
}
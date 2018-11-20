
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

const send = ({ email, name, text,html, subject }) => {
    console.log("in send function");
    const from = name && email ? `${name} <${email}>` : `${name || email}`
    const to = `${email} <${email}>`
    console.log("uemail : ", process.env.MAILER_USER);
    const message = {
        from: `PD Connect <bscwruproject2@gmail.com>`,
        to,
        subject,
        text,
        html,
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
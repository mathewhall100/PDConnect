const router = require("express").Router();
const mailer = require("../../mailer/index.js");

router.route("/contact")
    .post((req, res) => {
        console.log("req. body : ", req.body);
        const { email = '', name = '', text = '', html= '', subject = '' } = req.body
        console.log("subject : ", subject);
        console.log("email : ", email);
        console.log("name : ", name);
        console.log("message : ", text);
        console.log("html : " , html);
        mailer.send({ email, subject, name, text, html }).then(() => {
            console.log(`Sent the message "${text}" to <${name}> ${email}.`);
            res.status(200).send("message sent successfully!");
        }).catch((error) => {
            console.log(`Failed to send the message "${text}" to <${name}> ${email} with the error ${error && error.message}`);
            res.status(422).send("failed sending message");
        })
    });

module.exports = router;

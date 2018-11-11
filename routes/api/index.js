const router = require("express").Router();

const credsRoutes = require("./creds");
const mailerRoutes = require('./mailer');

//  Routes
router.use("/creds", credsRoutes);
router.use("/mailer", mailerRoutes);
module.exports = router;
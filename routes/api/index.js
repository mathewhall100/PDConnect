const router = require("express").Router();

const loginRoutes = require('./login');
const userRoutes = require("./user");
const credsRoutes = require("./creds");
const mailerRoutes = require('./mailer');

// api routes
router.use("/user", userRoutes)
router.use("/login", loginRoutes)

//  Routes
router.use("/creds", credsRoutes);
router.use("/mailer", mailerRoutes);

module.exports = router;
const router = require("express").Router()
const loginController = require("../../controllers/loginController")

// Matches with "/api/login"
router
    .route("/")
    .post(loginController.findByLogin)

module.exports = router
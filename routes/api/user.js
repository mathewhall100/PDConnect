const router = require("express").Router()
const userController = require("../../controllers/userController")

// Matches with "/api/user"
router
    .route("/")
    .get(userController.fetchAll)
    .get(userController.findById)

// Matches with "/api/user/create"
router 
    .route("/create")
    .post(userController.create)

module.exports = router
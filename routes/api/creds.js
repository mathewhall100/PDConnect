const router = require("express").Router();
const envController = require("../../controllers/envController");

// Matches with "/api/creds/"
router
    .route("/")
    .get(envController.findAll); 

module.exports = router;
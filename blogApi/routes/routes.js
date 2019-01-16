const express = require("express");
const bodyParser = require("body-parser");
const authorsRoutes = require('./author.route');

const router = express.Router();


router.get("/", function(req, res) {
    res.status(200).send("Welcome to our restful API");
});

router.use('/authors', authorsRoutes);

module.exports = router ;
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var pool= require('./pool');
var multer = require('multer');
router.use(bodyParser.json());

var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

router.post("/register_customer", function (req, res) {
    console.log(req.body);
    pool.query(
        "INSERT INTO registration_customer (fname, lname, mail, mob, city, password) VALUES(?,?,?,?,?,?)",
        [req.body.fname, req.body.lname, req.body.mail, req.body.mob, req.body.city, req.body.password],
        function (error, result) {
            if (error) {
                console.error("Error inserting record", error);
                res.status(500).json({ error: "Failed to register customer" });
            } else {
                console.log("Registration successful");
                res.json({ message: "Customer registered successfully" });
            }
        }
    );
});


module.exports = router;

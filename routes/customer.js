var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var pool= require('./pool');
var multer = require('multer');
router.use(bodyParser.json());

var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

  
router.post("/register_customer", function (req, res) {
    console.log(req.body)
    pool.query(
        "INSERT INTO registration_customer (fname, lname, mail, mob, city, password) VALUES(?,?,?,?,?,?)",
        [req.body.fname, req.body.lname, req.body.mail, req.body.mob, req.body.city, req.body.password],
        function (error, result) {
            if (error) {
                console.error("Error inserting record", error);
                res.status(500).json({ error: "Failed to register customer" });
            } else {
                console.log("Registration successful");
                res.json({ message: "Customer registered successfully" });w
            }
        }
    );
});

router.post("/reset_password", function (req,res) {
    console.log(req.body)
    const newPassword = req.body.password;
    const userMail = req.body.mail;
    pool.query(
        "UPDATE registration_customer SET password=? WHERE mail=?",
        [newPassword, userMail],
        function (error, result) {
            if (error) {
                console.error("Error updating password", error);
                res.status(500).json({error: "Failed to update password"});
            } else {
                console.log("Password updated");
                res.json({ message: "Password updated successfully"});
            }
        }
    );
});

router.post("/login_customer", function (req,res) {
    pool.query(
        "SELECT * FROM registration_customer WHERE mail=? and password=?",
        [req.body.mail, req.body.password],
        function (error, result) {
            if (error) {
                console.error("Error finding record", error);
                res.status(500).json({error:"Failed to find record"});
            }else {
                if (result === true) {
                    console.log("Login Successful")
                    res.status(200).json({message: "Success" });
                  } else {
                    res.status(200)
                    res.json({message: "Invalid Username or Password" });
                  };
            };
        }
    );
});

module.exports = router;

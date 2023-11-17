var express = require('express');
var router = express.Router();

// var pool= require('pool');
var multer = require('multer');

// router.post("/register_customer",function(req,res){
//     pool.query("INSERT INTO registration_customer (fname, lname, email, mob, city, password) VALUES(?,?,?,?,?,?)"), [req.body], function(error,result){
//         if(error){
//             console.error("Error inserting record", error);
//             res.status(500).json({error:"Failed to register customer"});

//         }
//         else{
//             console.log("Registration successful");
//             res.json({message: "Customer registrated successfully"});
//         }
//     }
        
// });

module.exports = router;

const express = require('express');
const router = express.Router();
const Employee = require("../Models/employees");

//Retrieve list of employees
router.get("/employees", function(req, res, next) {
    res.send({ type: "GET" });
});

//add a new employee to the database
router.post("/employees", function(req, res, next) {
    //taking the request save to the database
    Employee.create(req.body).then(function(employees){
       res.send(employees);
    }).catch(next);
  
});

//update employee to the database
router.put("/employees/:id", function(req, res, next) {
    res.send({ type: "PUT"});
});

//delete employee form database
router.delete("/employees/:id", function(req, res, next) {
    res.send({ type: "DELETE" });
});

module.exports = router;
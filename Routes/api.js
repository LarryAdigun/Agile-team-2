const express = require('express');
const router = express.Router();

//Retrieve list of employees
router.get("/employees", function(req, res, next) {
    res.send({ type: "GET" });
});

//add a new employee to the database
router.post("/employees", function(req, res, next) {
    res.send({ type: "POST" });
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
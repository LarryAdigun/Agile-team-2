const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create empoyee Schema

const EmployeeSchema = new Schema({
    name: {
        type: String,
    },
    id: {
        type: Number,
        required: [true]
    }
    
});

//create a collection
const Employee = mongoose.model("employee", EmployeeSchema);

module.exports = Employee;
//Requiring express to make it easier to listen for any input/connection request
const express = require('express');
const routes = require("./Routes/api");
const bodyParser = require('body-parser');
const mongoose = require("mongoose")



//set up express
const app = express();

//connect to mongodb-Mongoose going to create for us
mongoose.connect("mongodb://localhost/employeelist")
mongoose.Promise = global.Promise;

//parse different types of body-this specifically data
app.use(bodyParser.json());

//initialize routes
app.use(routes);

app.use(function(err,req,res,next){
    res.status(422).send({error:err.message});
});

//listen to port number
app.listen(process.env.port || 8080, function() {
  console.log("now listening for request");
});
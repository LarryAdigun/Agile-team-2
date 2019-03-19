//Requiring express to make it easier to listen for any input/connection request
const express = require('express');
const routes = require("./Routes/api");
const bodyParser = require('body-parser');



//set up express
const app = express();

//parse different types of body-this specifically data
app.use(bodyParser.json());

//initialize routes
app.use(routes);

//listen to port number
app.listen(process.env.port || 8080, function() {
  console.log("now listening for request");
});
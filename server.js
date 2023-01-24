const express = require("express"); //import dependencies
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require('./routes/htmlRoutes.js');

const app = express(); //create app

const PORT = process.env.PORT || 3000; //create a PORT variable

//create server listener
app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})

//set up express to handle data parsing
app.use(express.urlencoded({ extended: true })); // parse incoming string or array data
app.use(express.json()); // parse incoming JSON data
app.use(express.static("public"));
// Use apiRoutes
app.use(apiRoutes); 
app.use(htmlRoutes);
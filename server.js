import express from 'express'; //import dependencies
const app = express(); //create app

const PORT = process.env.PORT || 3000; //create a PORT variable

//create server listener
app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})

//set up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

import apiRoutes from './routes/apiRoutes';
app.use(apiRoutes);
const htmlRoutes = require("./routes/htmlRoutes");
app.use(htmlRoutes);

//create server listener
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
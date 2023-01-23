import express from 'express'; //import dependencies
const app = express(); //create app

const PORT = process.env.PORT || 3000; //create a PORT variable

//create server listener
app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})


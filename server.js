const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const bodyParser = require('body-parser');

//data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

//api routes will go here. 
const apiRoutes = require("./api.js");
app.use("/api", apiRoutes);

app.listen(PORT, () => {
    console.log(`API Server running on ${PORT}`)
})
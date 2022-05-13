const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

//api routes will go here. 
const apiRoutes = require("./api.js");
//data parsing
app.use(express.urlencoded({ extended: true}));

app.use(express.json());
app.use(express.static("public"));

app.use("/api", apiRoutes);

app.listen(PORT, () => {
    console.log(`API Server running on ${PORT}`)
})
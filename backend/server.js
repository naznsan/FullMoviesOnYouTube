const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection established");
});

app.get("/", (req, res) => {
    return res.send("Hello, World!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
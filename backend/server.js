const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000;
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection established");
});

let Movie = require("./models/movies.model");

app.get("/", (req, res) => {
    return res.send("Hello, World!");
});

app.get("/movies", (req, res) => {
   Movie.find().then(movies => res.json(movies)).catch(err => res.status(400).json("Error: " + err));
});

app.post("/movies/add", (req, res) => {
    const title = req.body.title;
    const release = req.body.release;
    const newMovie = new Movie({title : title, release : release});

    newMovie.save().then(() => res.json("User added!")).catch(err => res.status(400).json("Error: " + err));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
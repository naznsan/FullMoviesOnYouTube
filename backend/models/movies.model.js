const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
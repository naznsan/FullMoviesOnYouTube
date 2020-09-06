const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    release: {
        type: Number,
        required: true
    }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
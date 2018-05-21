const mongoose = require('mongoose');
const mongoDbUrl = require('../config/keys');
// Connect MongoDB
mongoose.connect(mongoDbUrl.mongoURI)
  .then(res => console.log(`MongoDB Connected 😂 😎 😍`));


const Schema = mongoose.Schema;
const MoviesSchema = new Schema({
  imdbId: {
    type: String
  },
  name: {
    type: String
  },
  poster: {
    type: String
  },
  genre: {
    type: String
  },
  year: {
    type: String
  },
});

const movies = mongoose.model('Movies', MoviesSchema);

module.exports = movies;
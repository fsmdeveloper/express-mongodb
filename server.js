const express = require('express');
const bodyParser = require('body-parser');
// Movies api calling
const movies = require('./api/movies');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// API Building
app.use('/api/movies', movies);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server Running on ${port} 💻 😁`);
});
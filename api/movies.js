const router = require('express').Router();
const Movies = require('../models/movies');

// @Route (GET) /api/movies/
// @Desc        Get All movies
// @Access       Public
router.get('/', (req, res) => {
  Movies.find()
    .then(allMovies => res.send(allMovies))
    .catch(err => console.log(err));
});
// ------------------------------

// @Route (GET) /api/movies/id
// @Desc        Get a Single Movie with ID
// @Access       Public
router.get('/:id', (req, res) => {
  Movies.findOne({ imdbId: req.params.id })
    .then((movie) => {
      if (!movie) {
        return res.status(404).send({ msg: 'Movie not found by given id' })
      }
      res.send(movie);

    });
});
// ------------------------------

// @Route (POST) /api/movies/
// @Desc        Create A movie
// @Access       Public
router.post('/', (req, res) => {
  Movies.create({
    imdbId: req.body.imdbId,
    name: req.body.name,
    poster: req.body.poster,
    genre: req.body.genre,
    year: req.body.year
  })
    .then(doc => res.send(doc));
});
// ------------------------------

// @Route (PUT) /api/movies/id
// @Desc        Update single movie
// @Access       Private
router.put('/:id', (req, res) => {
  Movies.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    year: req.body.year
  })
    .then(updatedMovie => res.send(updatedMovie));
});
// ------------------------------

// @Route (DELETE) /api/movies/id
// @Desc        Delete single movie with ID
// Access       Private
router.delete('/:id', (req, res) => {
  Movies.findByIdAndRemove(req.params.id)
    .then(deletedMovie => res.send(deletedMovie));
});
// ------------------------------
module.exports = router;
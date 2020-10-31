const { Genre, validateGenre } = require("../models/genres");

class GenreServices {
  async getAllGenres(req, res) {
    let genres = await Genre.find().sort("name");
    res.send(genres);
  }

  async insertGenre(req, res) {
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let genre = new Genre({ name: req.body.name });
    genre = await genre.save();

    res.send(genre);
  }
}

module.exports = GenreServices;

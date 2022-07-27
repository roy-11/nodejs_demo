const express = require("express");
const router = express.Router();
const { Genre, validateGenre } = require("./../models/genre");

router.get("/", async (_, res) => {
  const genres = await Genre.find().sort("name");
  res.send(genres);
});

router.post("/", async (req, res) => {
  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.message);

  let genre = new Genre({ name: req.body.name });
  genre = await genre.save();
  res.send(genre);
});

router.put("/:id", async (req, res) => {
  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.message);

  let genre = Genre.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    { new: true }
  );
  if (!genre)
    return res.status(404).send("The genre with given ID doesn't exists");

  res.send(genre);
});

router.delete("/:id", (req, res) => {
  let genre = Genre.findByIdAndRemove(req.params.id);
  if (!genre)
    return res.status(404).send("The genre with given ID doesn't exists");

  res.send(genre);
});

router.get("/:id", (req, res) => {
  console.log(req.params.id);
  let genre = Genre.findById(req.params.id);
  if (!genre)
    return res.status(404).send("The genre with given ID doesn't exists");

  res.send(genre);
});

module.exports = router;

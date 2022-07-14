const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  const courses = require("./courses_array");
  const targetCourse = courses.filter((c) => c.id === Number(req.params.id));

  if (!targetCourse[0]) return res.sendStatus(404);
  return res.send(targetCourse[0]);
});

router.post("/", (req, res) => {
  console.log(req.body);
  const { error } = validateCourses(req.body);
  if (error) {
    res.status(400).send(error.message);
    return;
  }

  const courses = require("./courses_array");
  const { name } = req.body;

  const newCourse = {
    id: courses.length + 1,
    name,
  };

  courses.push(newCourse);
  res.send(newCourse);
});

router.delete("/:id", (req, res) => {
  const courses = require("./courses_array");
  let { id } = req.params;
  id = Number(id);

  let deleteCourse = null;
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].id === id) deleteCourse = courses[i];
    if (deleteCourse) {
      courses[i] = courses[i + 1];
    }
  }

  if (!deleteCourse) return res.sendStatus(404);

  courses.pop();
  res.send(deleteCourse);
});

const Joi = require("joi");
function validateCourses(courses) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  return schema.validate(courses);
}

module.exports = router;

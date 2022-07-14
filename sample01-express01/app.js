const express = require("express");
const logger = require("./logger");
const helmet = require("helmet");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger(app));
app.use(helmet());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/posts/:year/:month", (req, res) => {
  const { params, query } = req;
  console.table({ params, query });
  res.send(params);
});

app.get("/api/courses/:id", (req, res) => {
  const courses = require("./courses");
  const targetCourse = courses.filter((c) => c.id === Number(req.params.id));

  if (!targetCourse[0]) return res.sendStatus(404);
  return res.send(targetCourse[0]);
});

app.post("/api/courses", (req, res) => {
  console.log(req.body);
  const { error } = validateCourses(req.body);
  if (error) {
    res.status(400).send(error.message);
    return;
  }

  const courses = require("./courses");
  const { name } = req.body;

  const newCourse = {
    id: courses.length + 1,
    name,
  };

  courses.push(newCourse);
  res.send(newCourse);
});

app.delete("/api/courses/:id", (req, res) => {
  const courses = require("./courses");
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

app.listen(3000, () => {
  console.log("PORT:", process.env.PORT || 3000);
});

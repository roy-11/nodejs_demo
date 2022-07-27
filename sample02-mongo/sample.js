const mongoose = require("mongoose");

async function connectMongoDB() {
  try {
    await mongoose.connect("mongodb://localhost/demo");
    console.log("Connected to MongoDB...");
  } catch (err) {
    console.log(err);
  }
}

connectMongoDB();

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    match: /.*/,
  },
  author: String,
  tags: {
    type: Array,
    validate: {
      validator: (v) => {
        return v && v.length > 0;
      },
      message: "tags needs at least one element.",
    },
  },
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  category: {
    type: String,
    required: false,
    enum: ["web", "mobile", "network"],
  },
  price: {
    type: Number,
    required: function () {
      return this.isPublished;
    },
  },
});

const Course = mongoose.model("Course", courseSchema);
async function createCourse() {
  const course = new Course({
    // name: "test2 course",
    author: "test2 man",
    tags: ["react", "backend"],
    isPublished: true,
  });

  try {
    // const check = await course.validate();
    // console.log("check", check);
    const result = await course.save();
    console.log(result);
  } catch (error) {
    for (const field in error.errors) {
      if (Object.hasOwnProperty.call(error.errors, field)) {
        const element = error.errors[field];
        console.log(element.message);
      }
    }
    // console.log(error);
  }
}
createCourse();

async function getCourses(params) {
  const courses = await Course.find({ author: "test2 man", isPublished: true })
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log(courses);
}
getCourses();

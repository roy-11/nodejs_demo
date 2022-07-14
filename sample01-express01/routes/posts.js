const express = require("express");
const router = express.Router();

router.get("/api/posts/:year/:month", (req, res) => {
  const { params, query } = req;
  console.table({ params, query });
  res.send(params);
});

module.exports = router;

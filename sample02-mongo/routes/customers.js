const express = require("express");
const router = express.Router();
const { Customers, validateCustomers } = require("./../models/customer");

router.get("/", async (_, res) => {
  const customers = await Customers.find().sort("name");
  res.send(customers);
});

router.post("/", async (req, res) => {
  const { error } = validateCustomers(req.body);
  if (error) return res.status(400).send(error.message);

  const { name, phone, isGold } = req.body;
  let customers = new Customers({
    name: name,
    phone: phone,
    isGold: isGold,
  });
  customers = await customers.save();
  res.send(customers);
});

module.exports = router;

const express = require("express");

const Items = require("../models/items.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const item = await Items.create(req.body);

    return res.send(item);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});


module.exports = router;

const express = require("express");
const router = express.Router();

// Placeholder route (Taaki server crash na ho)
router.get("/", (req, res) => {
  res.json({ message: "Profile route is working!" });
});

module.exports = router;

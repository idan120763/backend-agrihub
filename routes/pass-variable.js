const express = require("express");
const router = express.Router();

router.post("/", (req, res, next) => {
  // Extract the variables from the request body
  const { N, P, K, Resistivitas, Suhu, Kelembapan } = req.body;

  // Validate the variables
  if (!N || !P || !K || !Resistivitas || !Suhu || !Kelembapan) {
    return res.status(400).json({ error: "Mohon isi Semua Kolom" });
  }

  // Return the variables as a response
  res.status(201).json({
    N,
    P,
    K,
    Resistivitas,
    Suhu,
    Kelembapan,
  });
});

module.exports = router;

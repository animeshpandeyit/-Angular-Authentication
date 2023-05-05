const express = require("express");

const router = express.Router();

const mongoose = require("mongoose");

// const db =
//   "mongodb+srv://animeshpandeyit:Animesh123@cluster0.nvlem2q.mongodb.net/?retryWrites=true&w=majority";

// mongoose.connect(db, (err) => {
//   if (err) {
//     console.log("error", err);
//   } else {
//     console.log("connected to mongoDb");
//   }
// });

mongoose
  .connect(
    "mongodb+srv://animeshpandeyit:Animesh123@cluster0.nvlem2q.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )

  .then(() => console.log("Connected Successfully"))

  .catch((err) => {
    console.error(err);
  });

router.get("/", (req, res) => {
  res.send("From API Route");
});

module.exports = router;

const express = require("express");

const router = express.Router();

const mongoose = require("mongoose");
const User = require("../models/user");
const user = require("../models/user");

const Product = require("../models/product");

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

//

/* This code is defining a route for registering a new user. When a POST request is made to the
"/register" endpoint, it creates a new instance of the User model with the data from the request
body, saves it to the database, and sends the registered user data back in the response. If there is
an error during the save operation, it logs the error to the console. */

router.post("/register", (req, res) => {
  /* `let userData = req.body;` is assigning the value of the request body to a variable called
  `userData`. In this case, it is likely that the request body contains data submitted by a user
  through a form or API call, which will be used to create a new user or authenticate an existing
  user. */
  let userData = req.body;
  /* `let user = new User(userData);` is creating a new instance of the `User` model with the data from
  the request body (`userData`). This new instance can then be saved to the database using the
  `save()` method. */
  /* `let user = new User(userData);` is creating a new instance of the `User` model with the data from
  the request body (`userData`). This new instance can then be saved to the database using the
  `save()` method. */
  let user = new User(userData);

  user
    .save()
    .then((registeredUser) => {
      res.status(200).send(registeredUser);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/login", (req, res) => {
  /* `let userData = req.body;` is assigning the value of the request body to a variable called
  `userData`. In this case, it is likely that the request body contains data submitted by a user
  through a form or API call, which will be used to create a new user or authenticate an existing
  user. */
  let userData = req.body;

  /* `User.findOne({ email: userData.email })` is a MongoDB query that searches for a user in the
  database whose email matches the email provided in the `userData` object. It returns a promise
  that resolves to the user object if a match is found, or null if no match is found. */
  User.findOne({ email: userData.email })
    .then((user) => {
      if (!user) {
        res.status(401).send("Invalid Email");
      } else {
        if (
          user.password != userData.password ||
          user.email != userData.email
        ) {
          res.status(401).send("Invalid email Password");
        } else {
          res.status(200).send(user);
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/events", (req, res) => {
  const events = [
    {
      _id: 1,
      name: "Event 1",
      description: "Description for Event 1",
      date: "2023-05-10",
    },
    {
      _id: 2,
      name: "Event 2",
      description: "Description for Event 2",
      date: "2023-05-15",
    },
    {
      _id: 3,
      name: "Event 3",
      description: "Description for Event 3",
      date: "2023-05-20",
    },
  ];
  res.json(events);
});

router.get("/special", (req, res) => {
  const events = [
    {
      _id: 1,
      name: "Event 1",
      description: "Description for Event 1",
      date: "2023-05-10",
    },
    {
      _id: 2,
      name: "Event 2",
      description: "Description for Event 2",
      date: "2023-05-15",
    },
    {
      _id: 3,
      name: "Event 3",
      description: "Description for Event 3",
      date: "2023-05-20",
    },
  ];
  res.json(events);

  //   let objectDate = new Date();

  // let day = objectDate.getDate();
  // console.log(day); // 23

  // let month = objectDate.getMonth();
  // console.log(month + 1); // 8

  // let year = objectDate.getFullYear();
  // console.log(year); // 2022
});

router.post("/product", (req, res) => {
  let receiveproductInfo = req.body;
  let product = new Product(receiveproductInfo);

  product
    .save()
    .then((receiveproductInfo) => {
      res.status(200).send(receiveproductInfo);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;

// , (error, user) => {
//   if (error) {
//     console.log(error);
//   } else {
//     if (!user) {
//       res.status(401).send("Invalid Email");
//     } else {
//       if (user.password != userData.password) {
//         res.status(401).send("Invalid Password");
//       } else {
//         res.status(200).send(user);
//       }
//     }
//   }
// }

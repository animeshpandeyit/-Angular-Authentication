const express = require("express");
const jwt = require("jsonwebtoken");

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
  let userData = req.body;
  let user = new User(userData);
  user
    .save()
    .then((registeredUser) => {
      let payload = { subject: registeredUser._id };
      let token = jwt.sign(payload, "secretKey");
      // res.status(200).send(registeredUser);
      res.status(200).send({ token });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/login", (req, res) => {
  let userData = req.body;
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
          let payload = { subject: user._id };
          let token = jwt.sign(payload, "secretKey");
          res.status(200).send({ token });
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

router.get("/special", verifyToken, (req, res) => {
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

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized request");
  }
  let token = req.headers.authorization.split(" ")[1];
  if (token === "null") {
    return res.status(401).send("Unauthorized request");
  }
  /* `let payload = jwt.verify(token, "secretKey");` is verifying the token received in the request
  header by decoding it using the secret key "secretKey". If the token is valid, it returns the
  payload object which contains the user ID. This payload object is then added to the request object
  as `req.userId` using `req.userId = payload.subject;` in the `verifyToken` middleware function. */
  let payload = jwt.verify(token, "secretKey");
  if (!payload) {
    return res.status(401).send("Unauthorized request");
  }
  /* `req.userId = payload.subject;` is adding the decoded user ID from the JWT token to the request
  object as a new property called `userId`. This allows other middleware functions or routes to
  access the user ID and perform actions based on the user's identity. */
  req.userId = payload.subject;
  next();
}

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

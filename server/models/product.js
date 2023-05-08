const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// const userSchema = new Schema({
//   email: String,
//   password: String,
// });

const productInfo = new Schema({
  name: String,
  description: String,
  category: String,
  brand: String,
  // images: String,
  reviews: String,
});

// module.exports = mongoose.model("user", userSchema, "users");
/* Exporting a Mongoose model for a "products" collection in a MongoDB database. The model is defined
using the `productInfo` schema and will be stored in the "product" collection in the database. */
module.exports = mongoose.model("product", productInfo, "products");

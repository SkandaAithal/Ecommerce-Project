const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  soldBy: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    index: true,
  },
  company: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  shipping: {
    type: Boolean,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  reviews: {
    type: Number,
    required: true,
  },
  stars: {
    type: Number,
    required: true,
  },
  colors: {
    type: [String],
    required: true,
  },
  featured: {
    type: Boolean,
    required: true,
  },
});

const Products = model("Product", productSchema);

module.exports = Products;

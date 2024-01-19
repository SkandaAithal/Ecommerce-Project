const { Schema, model } = require("mongoose");
const imageSchema = new Schema({
  productName: {
    type: String,
    required: true,
    index: true,
  },
  blurHash: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

module.exports = Images = model("image", imageSchema);

const mongoose = require("mongoose");

const connectToDb = (url) => {
  return mongoose.connect(url);
};

module.exports = connectToDb;

const jsonwebtoken = require("jsonwebtoken");
const customApiErrors = require("../helpers/customErrors");
const User = require("../model/usersSchema");
require("dotenv").config();
let auth = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      return next(customApiErrors("token is required", 403));
    }
    token = token.split(" ")[1];
    let decodedData = jsonwebtoken.verify(token, process.env.SECRET_KEY);

    req.userToken = decodedData.email;
    let verifiedUser = await User.findOne({
      email: decodedData.email,
    });
    if (verifiedUser) {
      next();
    } else {
      throw next(customApiErrors("User not verified", 403));
    }
  } catch (err) {
    next(err);
  }
};

module.exports = auth;

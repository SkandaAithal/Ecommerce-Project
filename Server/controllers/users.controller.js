const Users = require("../model/usersSchema");
require("dotenv").config();
const asyncHelper = require("../helpers/asyncHelper");
const { invitationMail, otpMail } = require("../helpers/mailHelper");
const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const encryptData = require("../helpers/encryptHelper");
const { createOtp, otpVerify } = require("../helpers/otpHelper");
const customErrors = require("../helpers/customErrors");

const signup = asyncHelper(async (req, res, next) => {
  let password = await encryptData(req.body.password);
  await Users.create({ ...req.body, password });
  await invitationMail(req.body.email, req.body.name);
  return res.status(201).json({
    error: false,
    message: `Hello ${req.body.name}! You have created your account successfully. Enjoy Shopping`,
  });
});

const login = asyncHelper(async (req, res, next) => {
  let { email, password } = req.body;
  let isUserAvailable = await Users.findOne({ email });

  if (isUserAvailable) {
    if (await bcrypt.compare(password, isUserAvailable.password)) {
      let otp = await createOtp(isUserAvailable.email);

      await otpMail(isUserAvailable.email, isUserAvailable.name, otp);
      res
        .status(200)
        .json({ error: false, message: "OTP is Sent to your email" });
    } else {
      next(customErrors("Password is not matching", 400));
    }
  } else {
    next(customErrors("Email is not matching", 400));
  }
});

const verifyotp = asyncHelper(async (req, res, next) => {
  let { email, otp } = req.body;

  let userOtpverified = await otpVerify(email, otp);

  if (userOtpverified) {
    await Users.findOneAndUpdate({ email }, { verified: true }, { new: true });
    let token = jsonwebtoken.sign(
      { email },
      "jkaseygf7tp43ujasdfo8374troqefjhsgef92gwefr78twhefqgef",
      {
        expiresIn: "365d",
      }
    );
    token = `Bearer ${token}`;
    const userData = await Users.findOne({ email });
    return res.status(200).json({
      error: false,
      message: "You Have Logged in Successfully",
      token,
      userData,
    });
  } else {
    next(customErrors("Invalid OTP", 404));
  }
});
module.exports = { signup, login, verifyotp };

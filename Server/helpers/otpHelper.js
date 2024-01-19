const bcrypt = require("bcryptjs");
const Users = require("../model/usersSchema");
const encryptData = require("../helpers/encryptHelper");
const createOtp = async (email) => {
  let otp = Math.random().toString().split(".")[1].slice(0, 6);
  let expirationDuration = 1 * 60 * 1000;
  let expiry = new Date().getTime() + expirationDuration;
  let hash = await encryptData(otp);
  let hashedOTP = `${hash}.${expiry}`;

  await Users.findOneAndUpdate(
    { email },
    { otp: hashedOTP },
    { runValidators: true }
  );
  return otp;
};
const otpVerify = async (email, otp) => {
  let user = await Users.findOne({ email });
  let userOTPexpiryfromDB = user.otp.slice(user.otp.lastIndexOf(".") + 1);

  if (
    new Date().getTime() < userOTPexpiryfromDB &&
    (await bcrypt.compare(otp, user.otp.slice(0, user.otp.lastIndexOf("."))))
  ) {
    return true;
  } else {
    return false;
  }
};

module.exports = { createOtp, otpVerify };

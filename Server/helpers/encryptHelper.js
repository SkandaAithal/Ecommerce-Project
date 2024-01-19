const bcrypt = require("bcryptjs");

const encryptData = async (data) => {
  let salt = await bcrypt.genSalt(10);
  let hashData = await bcrypt.hash(data, salt);
  return hashData;
};
module.exports = encryptData;

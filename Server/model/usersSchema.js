const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: "Invalid email format",
    },
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  dob: {
    type: Date,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return /^[6-9]\d{9}$/.test(value);
      },
      message: "Invalid mobile number format",
    },
  },
  role: {
    type: String,
    enum: ["customer", "seller", "admin"],
    default: "customer",
  },
  organizationName: {
    type: String,
  },
  region: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^\d{6}$/.test(value);
      },
      message: "Invalid zip code format",
    },
  },
  otp: {
    type: String,
    required: true,
    default: "123456",
  },
  verified: {
    type: Boolean,
    required: true,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = model("User", userSchema);

module.exports = User;

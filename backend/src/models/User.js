const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isDefaultPassword: {
      type: Boolean,
      default: true,
    },
    defaultPassword: {
      type: String,
      default: "password",
    },
    role: {
      type: String,
      enum: ["admin", "user", "super-admin"],
      default: "user",
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("User", userSchema);

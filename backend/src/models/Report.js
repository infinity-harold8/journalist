const mongoose = require("mongoose");

const reportsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    storedProcedure: {
      type: String,
      required: true,
    },
    descriptions: {
      type: Boolean,
      default: true,
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

module.exports = mongoose.model("Reports", reportsSchema);

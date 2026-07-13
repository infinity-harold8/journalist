const mongoose = require("mongoose");

const userReportsSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    report_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reports",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("UserReports", userReportsSchema);

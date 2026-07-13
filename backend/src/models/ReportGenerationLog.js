const mongoose = require("mongoose");

const reportGenerationLogsSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    report_id: {
      type: String,
      required: true,
    },
    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("UserReports", reportGenerationLogsSchema);

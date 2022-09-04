const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    //this text actually the key value
    text: {
      type: String,
      required: true,
    },
  },
  {
    //Updated and incremented the field automatically
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", goalSchema);

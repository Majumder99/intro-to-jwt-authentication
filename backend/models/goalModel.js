const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      //Reference means who creates this. User will create this. user comes from UserSchema
      ref: "User",
    },
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

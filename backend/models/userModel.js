const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    // Mongoose schemas have a timestamps option that tells Mongoose to automatically manage createdAt and updatedAt properties on your documents.
    timestamps: true,
  }
);

//Users is the collection name in the database and here model name must be the collection name
//and singular form and schema is the datatype of the value
module.exports = mongoose.model("User", userSchema);

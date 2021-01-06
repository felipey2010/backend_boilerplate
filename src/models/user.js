const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create user schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"],
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
  },
  cpf: {
    type: String,
    required: [true, "CPF is required"],
  },
  email: {
    type: String,
    required: [true, "E-mail is required"],
  },
});

// Name of collection in MongoDB --> users
const User = mongoose.model("users", UserSchema);

module.exports = User;

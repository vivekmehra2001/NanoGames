const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    is_active: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
  
  });

  UserSchema.pre("save", async function (next) {
    const user = this;
    if (user.isModified("password")) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
      
    }
    next();
  });

  module.exports = mongoose.model("User", UserSchema);
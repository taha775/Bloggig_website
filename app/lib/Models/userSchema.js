import mongoose from "mongoose";

let userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  number: Number,
});

if (mongoose.models["users"]) {
  delete mongoose.models["users"];
} //this we use bar  bar run nhi karna parge a

export const USERMODEL = mongoose.model("users", userSchema);

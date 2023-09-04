import mongoose from "mongoose";

let blogginSchema = mongoose.Schema({
  blogger_uid: String,
  blogger_name: String,
  blog_title: String,
  blog_comment: String,
  blog_image: String,
});

if (mongoose.models["blogs"]) {
  delete mongoose.models["blogs"];
} //this we use bar  bar run nhi karna parge a

export const BLOGMODEL = mongoose.model("blogs", blogginSchema);

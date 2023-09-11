import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { ConnectLink } from "../../../../../lib/db";
import { BLOGMODEL } from "../../../../../lib/Models/BlogginSchema";

mongoose.connect(ConnectLink).then(() => {
  console.log("Connected to MongoDB");
});

export async function GET(request, content) {
  console.log(content.params);

  try {
    const checkblog = await BLOGMODEL.find({ _id: content.params.obj_id });
    console.log("check blog", checkblog);
    if (checkblog.length > 0) {
      return NextResponse.json({
        data: checkblog,
        messsage: "blogs getted ",
      });
    } else {
      return NextResponse.json({
        data: [],
        message: "didnt get any result ",
      });
    }
  } catch (error) {
    console.error("Error in GET request:", error);
    return NextResponse.error("An error occurred", 500);
  }

  return NextResponse.json({
    messagge: "api hitted ",
    res: content,
  });
}

export async function PUT(request, content) {
  try {
    const body = await request.json();
    console.log(body);
    console.log(content.params.obj_id);
    const id = content.params.obj_id;

    const checkblog = await BLOGMODEL.findOne({ _id: id });

    if (checkblog) {
      await checkblog.updateOne({
        blog_title: body.blog_title,
        blog_image: body.blog_image,
        blog_comment: body.blog_comment,
      });

      return NextResponse.json({
        data: checkblog,
        message: "Blog updated successfully",
      });
    } else {
      return NextResponse.error("Blog not found", 404);
    }
  } catch (error) {
    console.error("Error in PUT request:", error);
    return NextResponse.error("An error occurred", 500);
  }
}

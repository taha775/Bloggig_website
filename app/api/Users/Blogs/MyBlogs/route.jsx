import mongoose from "mongoose";
import { ConnectLink } from "../../../../lib/db";
import { NextResponse } from "next/server";
import { BLOGMODEL } from "../../../../lib/Models/BlogginSchema";

export async function POST(request, content) {
  await mongoose.connect(ConnectLink).then((val) => {
    console.log("test connect");
  });

  let body = await request.json();

  if (!body.blogger_uid || !body.blog_image || !body.blog_title) {
    return NextResponse.json({
      message: "Missing Required Field",
    });
  } else {
    let res = BLOGMODEL(body);
    await res.save();

    return NextResponse.json({
      message: "YOUR BLOG WAS ADDED SUCCSSFULLY",
      data: res,
    });
  }
}

///getting data from api for my blogs

export async function GET(request, content) {
  console.log(content);
  await mongoose.connect(ConnectLink).then((val) => {
    console.log("test connect");
  });

  let res = await BLOGMODEL.findOne({});

  return NextResponse.json({
    data: res,
    message: "blogs loaded successfully",
  });
}

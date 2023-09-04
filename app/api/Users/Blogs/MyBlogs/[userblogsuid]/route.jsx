import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { ConnectLink } from "../../../../../lib/db";
import { BLOGMODEL } from "../../../../../lib/Models/BlogginSchema";

export async function GET(request, content) {
  console.log(content.params.userblogsuid);

  await mongoose.connect(ConnectLink).then((val) => {
    console.log("connected");
  });

  let checkuser = await BLOGMODEL.findById({
    _id: content.params.userblogsuid,
  });

  console.log(checkuser);

  if (checkuser != null) {
    return NextResponse.json({
      data: checkuser,
      message: "GET Your RES",
    });
  } else {
    return NextResponse.json({
      data: [],
      message: "Not add any res",
    });
  }
}

export async function DELETE(request, content) {
  await mongoose.connect(ConnectLink);
  console.log("connected");

  let checkuser = await BLOGMODEL.deleteOne({
    blogger_uid: content.params.userblogsuid,
  });

  return NextResponse.json({
    data: checkuser,
    message: "deleted ",
  });
}

export async function PUT(request, content) {
  await mongoose.connect(ConnectLink);
  console.log("connected");

  let body = await request.json();
  console.log(body);
  console.log(content.params.userblogsuid);
  const id = content.params.userblogsuid;

  let checkuser = await BLOGMODEL.findOne({ _id: id });

  await checkuser.updateOne({
    blog_title: body.blog_title,
    blog_image: body.blog_image,
    blog_comment: body.blog_comment,
  });

  return NextResponse.json({
    data: checkuser,
    message: "blogs updated successfully  ",
  });
}

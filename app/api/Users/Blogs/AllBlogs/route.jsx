import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { ConnectLink } from "../../../../lib/db";
import { BLOGMODEL } from "../../../../lib/Models/BlogginSchema";

export async function GET() {
  await mongoose.connect(ConnectLink).then((val) => {
    console.log("test connect");
  });

  let res = await BLOGMODEL.find({});

  return NextResponse.json({
    data: res,
    message: "blogs loaded successfully",
  });
}

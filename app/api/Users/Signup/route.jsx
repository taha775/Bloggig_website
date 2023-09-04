import mongoose from "mongoose";
import { ConnectLink } from "../../../lib/db";
import { USERMODEL } from "../../../lib/Models/userSchema";
import { NextResponse } from "next/server";

export async function POST(request) {
  await mongoose.connect(ConnectLink).then((val) => {
    console.log("test connect");
    console.log(ConnectLink);
    return NextResponse.json({
      message: "aphitted",
    });
  });

  let data = await request.json();

  let checkuser = await USERMODEL.findOne({ email: data.email });
  console.log(checkuser);
  if (checkuser != null) {
    return NextResponse.json({
      message: "Already Regsister",
      data: checkuser,
    });
  } else {
    let res = USERMODEL(data);
    await res.save();
    return NextResponse.json({
      message: "User Regsister",
      data: res,
    });
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Api check",
    data: [],
  });
}

import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { ConnectLink } from "../../../../../lib/db";
import { BLOGMODEL } from "../../../../../lib/Models/BlogginSchema";

// Establish the MongoDB connection once in your application (e.g., in a separate file).
mongoose.connect(ConnectLink).then(() => {
  console.log("Connected to MongoDB");
});

export async function GET(request, content) {
  console.log(content);
  console.log(content.params);

  try {
    const checkuser = await BLOGMODEL.find({
      blogger_uid: content.params.userblogsuid,
    });
    console.log("check user", checkuser);

    if (checkuser.length > 0) {
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
  } catch (error) {
    console.error("Error in GET request:", error);
    return NextResponse.json({
      message: "blgs not found ",
    });
  }
}

export async function DELETE(request, content) {
  console.log(content);

  const checkuser = await BLOGMODEL.deleteOne({
    _id: content.params.userblogsuid,
  });

  console.log(checkuser);

  return NextResponse.json({
    data: checkuser,
    message: "deleted",
  });

  // } catch (error) {
  //   console.error("Error in DELETE request:", error);
  //   return NextResponse.error("An error occurred", 500);
}

// export async function PUT(request, content) {
//   try {
//     const body = await request.json();
//     console.log(body);
//     console.log(content.params.userblogsuid);
//     const id = content.params.userblogsuid;

//     const checkuser = await BLOGMODEL.findOne({ _id: id });

//     if (checkuser) {
//       await checkuser.updateOne({
//         blog_title: body.blog_title,
//         blog_image: body.blog_image,
//         blog_comment: body.blog_comment,
//       });

//       return NextResponse.json({
//         data: checkuser,
//         message: "Blog updated successfully",
//       });
//     } else {
//       return NextResponse.error("Blog not found", 404);
//     }
//   } catch (error) {
//     console.error("Error in PUT request:", error);
//     return NextResponse.error("An error occurred", 500);
//   }
// }

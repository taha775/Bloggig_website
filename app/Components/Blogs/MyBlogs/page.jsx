"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

function AllBlogs() {
  let router = useRouter();

  const handleEdit = (postId) => {
    console.log(postId);
    // Redirect to the edit page, passing the postId as a query parameter
    router.push(`/Components/Blogs/EditBlogs?id=${postId}`);
  };

  const handleDelete = (postId) => {
    console.log(postId);
    // Send a DELETE request to your backend API to delete the blog post
    axios
      .delete(`http://localhost:3000/api/Users/Blogs/MyBlogs/${postId}`)
      .then((response) => {
        console.log("Blog post deleted successfully.");
        // Optionally, you can update the UI to reflect the deletion.
        // You can remove the deleted post from the 'res' state or refetch the updated list of posts.
      })
      .catch((error) => {
        console.error("Error deleting blog post:", error);
      });
  };

  const [res, setres] = useState([]);

  useEffect(() => {
    let user_id = localStorage.getItem("user_id");

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://localhost:3000/api/Users/Blogs/MyBlogs/${user_id}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setres(response.data.data); // Set the response data directly
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>MY BLOGS</h1>

      {res.map((v, i) => {
        return (
          <div className="border-2 w-1/2 mx-auto" key={v._id}>
            <h1>blogiid {v._id}</h1>

            <h1>{v.blog_title}</h1>
            <h1>bloggeruid:{v.blogger_uid}</h1>
            <img src={v.blog_image} alt="Blog Image" />
            {v.blog_comment != null ? (
              <>
                <b>{v.blog_comment}</b>
                <br />
              </>
            ) : (
              <b></b>
            )}
            <button onClick={() => handleEdit(v._id)}>Edit</button>
            <button onClick={() => handleDelete(v._id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
}

export default AllBlogs;

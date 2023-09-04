"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function EditBlogs(params) {
  console.log(params);
  const router = useRouter();
  // const { id } = router.query; // Get the blog ID from the query parameter

  const [blogData, setBlogData] = useState({
    blog_title: "",
    blog_comment: "",
    blog_image: "",
  });

  useEffect(() => {
    if (params) {
      console.log(params.searchParams.id);
      // Fetch the existing blog data by blog ID
      axios
        .get(
          `http://localhost:3000/api/Users/Blogs/MyBlogs/${params.searchParams.id}`
        )
        .then((response) => {
          console.log(response);
          setBlogData(response.data); // Set the fetched data in state
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [params.searchParams.id]);

  const handleChange = (e) => {
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
  };

  const submit = () => {
    axios
      .put(`http://localhost:3000/api/Users/Blogs/MyBlogs/${params}`, blogData)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setBlogData(response.data);
        alert("Blog updated successfully");
        router.push("/Components/Blogs/AllBlogs");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white text-red-500 rounded-lg shadow-xl">
      <h1 className="text-2xl mb-4 text-center">Edit Blog</h1>

      {/* Create input fields to edit the blog data */}
      <input
        type="text"
        placeholder="Enter Blog Title"
        name="blog_title"
        value={blogData.blog_title}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Enter Blog Comment"
        name="blog_comment"
        value={blogData.blog_comment}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Enter Image Address"
        name="blog_image"
        value={blogData.blog_image}
        onChange={handleChange}
      />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
        onClick={submit}
      >
        Update Blog
      </button>
    </div>
  );
}

export default EditBlogs;

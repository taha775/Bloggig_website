"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export const Input = ({ type, placeholder, value, name, handleChange }) => {
  return (
    <input
      className="border border-gray-300 rounded px-3 py-2 mt-2 w-full"
      value={value}
      onChange={(e) => handleChange(e)}
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
};

function AddBlogs() {
  const route = useRouter();
  let [blogs, setblogs] = useState({
    blog_title: "",
    blog_comment: "",
    blog_image: "",
    blogger_uid: localStorage.getItem("user_id"),
  });

  const handleChange = (e) => {
    setblogs({ ...blogs, [e.target.name]: e.target.value });
  };

  const submit = () => {
    console.log(blogs);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/Users/Blogs/MyBlogs",
      headers: {
        "Content-Type": "application/json",
      },
      data: blogs,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        alert(response.data.message);
        localStorage.setItem("user_id", response.data.data._id);
        route.push("/Components/Blogs/AllBlogs");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white text-red-500 rounded-lg shadow-xl">
      <h1 className="text-2xl mb-4 text-center">Add your Blog here </h1>

      <Input
        handleChange={handleChange}
        type="text"
        placeholder={"Enter blog title"}
        value={blogs.blog_title}
        name="blog_title"
      />
      <Input
        handleChange={handleChange}
        type="text"
        placeholder={"Enter your comment"}
        value={blogs.blog_comment}
        name="blog_comment"
      />
      <Input
        handleChange={handleChange}
        type="text"
        placeholder={"Enter image address"}
        value={blogs.blog_image}
        name="blog_image"
      />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
        onClick={() => submit()}
      >
        Add your Blog
      </button>
    </div>
  );
}

export default AddBlogs;

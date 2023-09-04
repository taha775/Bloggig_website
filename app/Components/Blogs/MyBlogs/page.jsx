"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

function AllBlogs() {
  const delete_blog = () => {
    console.log("deleted ");
  };

  let [res, setres] = useState([]);

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
        setres(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <h1>MY BLOGS </h1>

      {res.map((v, i) => {
        return (
          <div className="border-2 w-1/2 mx-auto">
            <h1>{v.blog_title}</h1>
            <img src={v.blog_image} />
            {v.blog_comment != null ? (
              <>
                <b>{v.blog_comment}</b>
                <br />
              </>
            ) : (
              <b></b>
            )}

            <b>{v.blogger_uid}</b>
          </div>
        );
      })}
    </>
  );
}

export default AllBlogs;

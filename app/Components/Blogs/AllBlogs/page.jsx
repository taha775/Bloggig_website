"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

function AllBlogs() {
  let [res, setres] = useState([]);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/Users/Blogs/AllBlogs",
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
      <Link href={`/Components/Blogs/AddBlogs/`}> AddBlogs</Link>;
      <h1>All Blogs</h1>
      <Link href={"/Components/Blogs/MyBlogs/"}>My Blogs</Link>
      <br />
      {res.map((v, i) => {
        return (
          <div className="border-2 w-1/2 mx-auto">
            <b>object id {v._id}</b>
            <br />
            <b>{v.blogger_uid}</b>
            <h1>{v.blogger_name}</h1>
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
          </div>
        );
      })}
    </>
  );
}

export default AllBlogs;

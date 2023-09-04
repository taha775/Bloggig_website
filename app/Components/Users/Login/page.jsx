"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export const Input = ({ type, placeholder, value, name, handleChange }) => {
  return (
    <input
      className="border border-gray-300   rounded px-3 py-2 mt-2 w-full"
      value={value}
      onChange={(e) => handleChange(e)}
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
};

function Login() {
  const route = useRouter();
  let [user, setuser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const submit = () => {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/Users/Login",
      headers: {
        "Content-Type": "application/json",
      },
      data: user, // Use the user object here
    };

    axios.request(config).then((response) => {
      console.log(JSON.stringify(response.data.data));
      setuser(response.data.data);
      localStorage.setItem("user_id", response.data.data._id);
      route.push("/Components/Blogs/AllBlogs");
      alert(response.data.message);
      // if (response.data.data.success) {

      // } else {
      //   alert(response.data.message);
      // }
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 text bg-white rounded-lg shadow-xl">
      <h1 className="text-2xl mb-4 text-center">Login</h1>

      <Input
        handleChange={handleChange}
        type="email"
        placeholder={"Enter Email"}
        value={user.email}
        name="email"
      />
      <Input
        handleChange={handleChange}
        type="password"
        placeholder={"Enter Password"}
        value={user.password}
        name="password"
      />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
        onClick={() => submit()}
      >
        Login
      </button>
    </div>
  );
}

export default Login;

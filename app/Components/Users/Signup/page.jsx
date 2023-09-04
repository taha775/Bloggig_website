"use client";
import React, { useState } from "react";
import axios from "axios";

export const Input = ({ type, placeholder, value, name, handleChange }) => {
  return (
    <input
      className="border border-gray-300 rounded px-3 py-2 mt-2 w-full focus:outline-none focus:border-blue-500"
      value={value}
      onChange={(e) => handleChange(e)}
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
};

function SignUp() {
  let [user, setuser] = useState({
    email: "",
    password: "",
    name: "",
    number: "",
  });

  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/Users/Signup",
      headers: {
        "Content-Type": "application/json",
      },
      data: user,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        alert(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-700">
      <div className="max-w-md mx-auto p-6 text-black bg-white rounded-lg shadow-xl">
        <h1 className="text-2xl mb-4 text-center font-semibold">Sign Up</h1>

        <Input
          type="text"
          handleChange={handleChange}
          placeholder="Enter Name"
          value={user.name}
          name="name"
        />
        <Input
          handleChange={handleChange}
          type="email"
          placeholder="Enter Email"
          value={user.email}
          name="email"
        />
        <Input
          handleChange={handleChange}
          type="password"
          placeholder="Enter Password"
          value={user.password}
          name="password"
        />
        <Input
          handleChange={handleChange}
          type="number"
          placeholder="Enter Number"
          value={user.number}
          name="number"
        />

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full mt-4 focus:outline-none"
          onClick={handleSubmit}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default SignUp;

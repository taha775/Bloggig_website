"use client";

// import React, { useState } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import Container from "@mui/material/Container";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";

// function Login() {
//   const router = useRouter();
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const submit = () => {
//     let config = {
//       method: "post",
//       maxBodyLength: Infinity,
//       url: "http://localhost:3000/api/Users/Login",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       data: user,
//     };

//     axios.request(config).then((response) => {
//       if (response.data.success) {
//         router.push("/Components/Blogs/AllBlogs");
//       } else {
//         setError(response.data.message);
//       }
//     });
//   };

//   return (
//     <Container
//       className="bg-white text-black w-300"
//       component="main"
//       maxWidth="xs"
//     >
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
//           Sign in
//         </Typography>
//         <TextField
//           margin="normal"
//           required
//           fullWidth
//           id="email"
//           label="Email Address"
//           name="email"
//           autoComplete="email"
//           autoFocus
//           value={user.email}
//           onChange={handleChange}
//           sx={{ mb: 2 }}
//         />
//         <TextField
//           margin="normal"
//           required
//           fullWidth
//           name="password"
//           label="Password"
//           type="password"
//           id="password"
//           autoComplete="current-password"
//           value={user.password}
//           onChange={handleChange}
//           sx={{ mb: 2 }}
//         />
//         {error && (
//           <Typography
//             variant="body2"
//             color="error"
//             align="center"
//             sx={{ mb: 2 }}
//           >
//             {error}
//           </Typography>
//         )}
//         <Button
//           type="button"
//           fullWidth
//           variant="contained"
//           onClick={submit}
//           sx={{ mt: 3 }}
//         >
//           Login
//         </Button>
//       </Box>
//     </Container>
//   );
// }

// export default Login;

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
    <div className="max-w-lg  mx-auto mt-40 p-9   text bg-white text-orange-600 rounded-lg shadow-xl">
      <h1 className="text-2xl mb-4 text-center font-semibold">Login</h1>

      <Input
        className="text-black font-sem"
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

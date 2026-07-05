// import React from 'react'
// import {useState} from "react";
// import axios from "axios"; 
// import { useDispatch } from "react-redux";
// import { addUser } from "../utils/userSlice";
// import { useNavigate } from "react-router-dom";
// import {BASE_URL} from "../utils/constants";


// const Login = () => {
//   //CREATING STATE
//   const [emailId, setEmailId] = useState("shubham@gmail.com");
//   const [password, setPassword] = useState("123@BShubham");

//   const [error,setError] = useState("");

//   const dispatch = useDispatch();
//    const navigate = useNavigate();
//   //for handling login
//   const handleLogin = async () => {
   
//   try {
//     const res = await axios.post(BASE_URL + "/login", {
//       emailId,
//       password,
//     },
//     { withCredentials: true}
//   );

//     console.log(res.data);
//     dispatch(addUser(res.data));
//      return navigate("/");
//   } catch (err) {
//     setError(err?.response?.data || "Something went wrong");
   
//   }
// };

//   return (
//     <div className = "flex justify-center my-10"> 
//     <div className="card bg-base-300 w-96 shadow-xl">
//   <div className="card-body ">
//     <h2 className="card-title flex justify-center h-1.5">Login</h2>
//     <div>
//       <fieldset className="fieldset">
//   <legend className="fieldset-legend">Email ID</legend>
//   <input type="email"  value = {emailId}className="input" placeholder="Type here"  onChange={(e) => setEmailId(e.target.value)} />
  
// </fieldset>

//  <fieldset className="fieldset">
//   <legend className="fieldset-legend">Password</legend>
//   <input type="password" value = {password} className="input" placeholder="Type here"  onChange={(p) => setPassword(p.target.value)} />
  
// </fieldset>

//     </div>
//     <p className = "text-red-500">{error}</p>
//     <div className="card-actions justify-center">
//       <button className="btn btn-primary" onClick = {handleLogin}>Login </button>
//     </div>
//   </div>
// </div>
// </div>
//   )
// }

// export default Login





import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Login
   const handleLogin = async () => {
  console.log("Login button clicked");

  try {
    console.log("Sending request...");

    const res = await axios.post(
      BASE_URL + "/login",
      {
        emailId,
        password,
      },
      {
        withCredentials: true,
      }
    );

    console.log("Response:", res);

    dispatch(addUser(res.data));

    console.log("Navigating...");
    navigate("/feed");
  } catch (err) {
    console.log("Login Error:", err);
    console.log("Response:", err.response);

    setError(err?.response?.data || "Something went wrong");
  }
};

  // Signup
  const handleSignup = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          firstName,
          lastName,
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );

      dispatch(addUser(res.data));

      // Navigate to profile after signup
      navigate("/profile");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">

          <h2 className="card-title justify-center text-2xl mb-2">
            {isLoginForm ? "Login" : "Signup"}
          </h2>

          {/* First Name */}
          {!isLoginForm && (
            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                First Name
              </legend>

              <input
                type="text"
                className="input w-full"
                placeholder="Enter First Name"
                value={firstName}
                onChange={(e) =>
                  setFirstName(e.target.value)
                }
              />
            </fieldset>
          )}

          {/* Last Name */}
          {!isLoginForm && (
            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                Last Name
              </legend>

              <input
                type="text"
                className="input w-full"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={(e) =>
                  setLastName(e.target.value)
                }
              />
            </fieldset>
          )}

          {/* Email */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              Email ID
            </legend>

            <input
              type="email"
              className="input w-full"
              placeholder="Enter Email"
              value={emailId}
              onChange={(e) =>
                setEmailId(e.target.value)
              }
            />
          </fieldset>

          {/* Password */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">
              Password
            </legend>

            <input
              type="password"
              className="input w-full"
              placeholder="Enter Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
          </fieldset>

          {error && (
            <p className="text-red-500 mt-2">{error}</p>
          )}

          <div className="card-actions justify-center mt-4">
            <button
              className="btn btn-primary w-32"
              onClick={
                isLoginForm
                  ? handleLogin
                  : handleSignup
              }
            >
              {isLoginForm ? "Login" : "Signup"}
            </button>
          </div>

          <p className="text-center mt-5">
            {isLoginForm
              ? "New User? "
              : "Already have an account? "}

            <span
              className="text-blue-500 cursor-pointer font-semibold hover:underline"
              onClick={() => {
                setIsLoginForm(!isLoginForm);
                setError("");
              }}
            >
              {isLoginForm
                ? "Signup Here"
                : "Login Here"}
            </span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;
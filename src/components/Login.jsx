import React from 'react'
import {useState} from "react";
import axios from "axios"; 
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from "../utils/constants";


const Login = () => {
  //CREATING STATE
  const [emailId, setEmailId] = useState("shubham@gmail.com");
  const [password, setPassword] = useState("123@BShubham");

  const dispatch = useDispatch();
   const navigate = useNavigate();
  //for handling login
  const handleLogin = async () => {
   
  try {
    const res = await axios.post(BASE_URL + "/login", {
      emailId,
      password,
    },
    { withCredentials: true}
  );

    console.log(res.data);
    dispatch(addUser(res.data));
     return navigate("/");
  } catch (err) {
    console.error(err);
  }
};

  return (
    <div className = "flex justify-center my-10"> 
    <div className="card bg-base-300 w-96 shadow-xl">
  <div className="card-body ">
    <h2 className="card-title flex justify-center h-1.5">Login</h2>
    <div>
      <fieldset className="fieldset">
  <legend className="fieldset-legend">Email ID</legend>
  <input type="email"  value = {emailId}className="input" placeholder="Type here"  onChange={(e) => setEmailId(e.target.value)} />
  
</fieldset>

 <fieldset className="fieldset">
  <legend className="fieldset-legend">Password</legend>
  <input type="password" value = {password} className="input" placeholder="Type here"  onChange={(p) => setPassword(p.target.value)} />
  
</fieldset>

    </div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick = {handleLogin}>Login </button>
    </div>
  </div>
</div>
</div>
  )
}

export default Login

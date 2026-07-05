import React from 'react'
import EditProfile from './EditProfile'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import store from '../utils/appStore';
import UserCard from "./UserCard";
 
const Profile = () => {
  const user = useSelector((store) => store.user);
  return (
    user && (
    <div>
      <EditProfile user = {user}/>
    </div>
    )
  )
}

export default Profile


import React from 'react'
import EditProfile from './EditProfile'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import store from '../utils/appStore';
import UserCard from "./UserCard";
 import ConnectionStats from "./ConnectionStats";


import ProfileCompletion from "./ProfileCompletion";


const Profile = () => {
  const user = useSelector((store) => store.user);

  if (!user) return null;

  return(

<div className="max-w-7xl mx-auto">

    <ConnectionStats/>

    <EditProfile user={user}/>

</div>

)
};

export default Profile;
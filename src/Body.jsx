import React from 'react'
import NavBar from './navBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
const Body = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>     
        {/* This is where the nested routes will be rendered */}
      <Footer/>
    </div>
  )
}

export default Body

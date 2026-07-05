// import React from 'react'

// const navBar = () => {
//   const user = useSelector((store) => store.user);
//   return (
//    <div className="navbar bg-base-300 shadow-sm">
//   <div className="flex-1">
//     <a className="btn btn-ghost text-xl"> DevTinder</a>
//   </div>
//   <div className="flex gap-2">
//     {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
//     <div className="dropdown dropdown-end mx-5">
//       <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//         <div className="w-10 rounded-full ">
//           <img
//             alt="Tailwind CSS Navbar component"
//             src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
//         </div>
//       </div>
//       <ul
//         tabIndex="-1"
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//         <li>
//           <a className="justify-between">
//             Profile
//             <span className="badge">New</span>
//           </a>
//         </li>
//         <li><a>Settings</a></li>
//         <li><a>Logout</a></li>
//       </ul>
//     </div>
//   </div>
// </div>
//   )
// }

// export default navBar



import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";


const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
const navigate = useNavigate();

  const handleLogout = async () => {
  try {
    await axios.post(
      BASE_URL + "/logout",
      {},
      { withCredentials: true }
    );

    dispatch(removeUser());
    navigate("/login");
  } catch (err) {
    console.error(err);
  }
};

  return (
    <div className="navbar bg-base-300 shadow-sm px-5">
      {/* Logo */}
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-2xl font-bold">DevTinder</Link>
      </div>

      {/* Right Side */}
      {user && (
        <div className="flex items-center gap-4">
          <p className="font-semibold">
            Welcome, {user.firstName}
          </p>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Profile"
                  src={
      user?.photourl
        ? user.photourl
        : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
    }
                />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-1 w-52 rounded-box bg-base-100 p-2 shadow"
            >
                <li>
                <Link to="/feed"> Feed</Link>
              </li>
             <li>
<Link to="/profile">Profile</Link>
</li>
              <li>
                <Link to="/user/connections"> Connections</Link>
              </li>


                <li>
                <Link to="/user/requests/recieved">Requests</Link>
              </li>

              <li>
  <button onClick={handleLogout}>Logout</button>
</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
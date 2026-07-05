// import React from 'react'

// const userCard = () => {
//   return (
//    <div className="card bg-base-100 w-96 shadow-sm">
//   <figure>
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//       alt="Shoes" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">Card Title</h2>
//     <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>
//   )
// }

// export default userCard









import axios from "axios";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { removeUserFromFeed } from "../utils/feedSlice";


import React from "react";

const UserCard = ({ user }) => {
    const dispatch = useDispatch();
  if (!user) return null;

  const { _id,firstName, lastName, age, gender, about, photourl,skills } = user;



  const handleSendRequest = async (status, userId) => {
  try {
    await axios.post(
      BASE_URL + "/request/send/" + status + "/" + userId,
      {},
      {
        withCredentials: true,
      }
    );

    dispatch(removeUserFromFeed(userId));
  } catch (err) {
    console.error(err);
  }
};

  return (
      <div className="card bg-base-300 w-90 shadow-xl rounded-xl">
      <figure>
        <img src={photourl} alt={firstName} className="w-full h-68 object-cover"/>
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {firstName} {lastName}
        </h2>

        <p>{age} • {gender}</p>
        <p>{about}</p>

        <div className="flex flex-wrap gap-2">
      {skills?.slice(0, 4).map((skill, index) => (
        <span
          key={index}
          className="badge badge-outline badge-primary"
        >
          {skill}
        </span>
      ))}
    </div>

        <div className="card-actions justify-center">
      <button
  className="btn btn-error"
  onClick={() => handleSendRequest("ignored", _id)}
>
  Ignore
</button>

<button
  className="btn btn-success"
  onClick={() => handleSendRequest("interested", _id)}
>
  Interested
</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

// import axios from "axios";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { BASE_URL } from "../utils/constants";
// import { addFeed } from "../utils/feedSlice";
// import UserCard from "./userCard"

// const Feed = () => {
//   const dispatch = useDispatch();
//   const feed = useSelector((store) => store.feed);

//   const getFeed = async () => {
//     // Don't fetch again if feed already exists
//     if (feed) return;

//     try {
//       const res = await axios.get(BASE_URL + "/feed", {
//         withCredentials: true,
//       });

//       dispatch(addFeed(res.data));
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     getFeed();
//   }, []);

//   return (
//     <div>
//       <UserCard/>
//     </div>
//   );
// };

// export default Feed;






import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  const getFeed = async () => {
    if (feed) return;

    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });

      dispatch(addFeed(res.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed) return null;

  if (feed.length === 0) {
    return <h1 className="text-center mt-10">No New Users Found</h1>;
  }

  return (
    <div className="flex justify-center my-10 ">
      <UserCard user={feed[0]} />
    </div>
  );
};

export default Feed;
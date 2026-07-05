import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
import connectionReducer from "./connectionSlice";
import RequestSliceReducer from "./RequestSlice";


 const store = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    connection: connectionReducer,
    requests: RequestSliceReducer,
  },
});
export default store;




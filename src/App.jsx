import NavBar from "./components/navBar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Body from "./components/Body";
import Profile from "./components/Profile";
import Login from "./components/Login";  
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import RequestRecieved from "./components/RequestRecieved";
import { Navigate } from "react-router-dom";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
     <Provider store={appStore}>
      <BrowserRouter basename = "/">  
     <Routes>
  {/* Redirect root to login */}
  <Route path="/" element={<Navigate to="/login" replace />} />

  {/* Login */}
  <Route path="/login" element={<Login />} />

  {/* Protected Pages */}
  <Route path="/" element={<Body />}>
    <Route path="feed" element={<Feed />} />
    <Route path="profile" element={<Profile />} />
    <Route path="user/connections" element={<Connections />} />
    <Route
      path="user/requests/recieved"
      element={<RequestRecieved />}
    
    />
    <Route path="/profile/:userId" element={<UserProfile />} />
  </Route>
</Routes>
      
      
      </BrowserRouter>
      </Provider>
    
    </>
  );
}

export default App;




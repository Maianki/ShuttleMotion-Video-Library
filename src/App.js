import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import {
  VideoListing,
  Login,
  Signup,
  History,
  Liked,
  WatchLater,
  Playlist,
  WatchVideo,
} from "pages";
import { RequireAuth, RestrictAuth } from "components";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<VideoListing />}></Route>
        <Route element={<RestrictAuth />}>
          <Route path='login' element={<Login />}></Route>
          <Route path='sign-up' element={<Signup />}></Route>
        </Route>
        <Route element={<RequireAuth />}>
          <Route path='/history' element={<History />}></Route>
          <Route path='/playlist' element={<Playlist />}></Route>
          <Route path='/liked' element={<Liked />}></Route>
          <Route path='/watch-later' element={<WatchLater />}></Route>
        </Route>
        <Route path='/watch/:videoID' element={<WatchVideo />}></Route>
        <Route path='/mockman' element={<Mockman />}></Route>
      </Routes>
    </div>
  );
}

export default App;

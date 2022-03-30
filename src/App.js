import "./App.css";
import { Routes, Route } from "react-router-dom";
import { VideoListing, Login, Signup } from "pages";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<VideoListing />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='sign-up' element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;

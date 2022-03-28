import "./App.css";
import { Routes, Route } from "react-router-dom";
import { VideoListing } from "pages";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<VideoListing />}></Route>
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { VideosAndCategoryProvider } from "context/videos-and-category-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideosAndCategoryProvider>
        <App />
      </VideosAndCategoryProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

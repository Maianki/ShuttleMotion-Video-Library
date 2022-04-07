import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import {
  VideosAndCategoryProvider,
  AuthProvider,
  VideosOperationsProvider,
  PlaylistsProvider,
  SnackbarProvider,
} from "context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SnackbarProvider>
        <AuthProvider>
          <VideosAndCategoryProvider>
            <VideosOperationsProvider>
              <PlaylistsProvider>
                <App />
              </PlaylistsProvider>
            </VideosOperationsProvider>
          </VideosAndCategoryProvider>
        </AuthProvider>
      </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

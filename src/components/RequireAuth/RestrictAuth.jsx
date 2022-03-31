import React from "react";
import { useAuth } from "context";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export function RestrictAuth() {
  const {
    auth: { encodedToken, isAuthenticated },
  } = useAuth();
  const location = useLocation();

  if (encodedToken && isAuthenticated)
    return <Navigate to='/' state={{ from: location }} replace />;
  return <Outlet />;
}

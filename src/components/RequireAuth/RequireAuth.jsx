import React from "react";
import { useAuth } from "context";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export function RequireAuth() {
  const {
    auth: { encodedToken, isAuthenticated },
  } = useAuth();
  const location = useLocation();

  if (encodedToken && isAuthenticated) return <Outlet />;
  return <Navigate to='/login' state={{ from: location }} replace />;
}

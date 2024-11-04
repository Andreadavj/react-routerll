import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "./UserContext";

const ProtectedRoute = ({ children }) => {
  const { token } = useUser();

  return token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

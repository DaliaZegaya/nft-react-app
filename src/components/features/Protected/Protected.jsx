import "./Protected.css";
import React from "react";
import { useUserAuth } from '../../../contexts/userAuth.context'
import { Navigate } from "react-router-dom";

function Protected({children}) {
  const { user } = useUserAuth()
  return (
    user == null ? <Navigate to="login"/> : children
  );
};

export default Protected;

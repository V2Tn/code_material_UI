import { useContext } from "react";
import AuthContext from "./AuthContext";
import { useLocation, Navigate } from "react-router-dom";

function RequireAuth({ children }) {
  let auth = useContext(AuthContext);
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;

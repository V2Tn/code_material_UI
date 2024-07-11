import { useContext } from "react";
import AuthContext from "./AuthContext";
import { useLocation } from "react-router-dom";

function RequireAuth({ children }) {
  let auth = useContext(AuthContext);
  let location = useLocation();

  return children;
}

export default RequireAuth;

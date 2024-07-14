import React, { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import Auth from "./auth";

function AuthProvider({ children }) {
  let [user, setUser] = useState(null);

  useEffect(() => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  }, [user]);

  let signin = (newUser, callback) => {
    return Auth.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback) => {
    return Auth.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

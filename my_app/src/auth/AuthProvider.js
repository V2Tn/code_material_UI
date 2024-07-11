import React, { useState, useEffect } from "react";
import Auth from "./auth";
import AuthContext from "./AuthContext";

function AuthProvider({ children }) {
  let [user, setUser] = useState(null);

  useEffect(() => {
    if (Auth.isAuthenticated) {
      setUser("tuanvan113"); // Giả sử "tuanvan113" là tên người dùng sau khi đăng nhập
    } else {
      setUser(null);
    }
  }, [Auth.isAuthenticated]);

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

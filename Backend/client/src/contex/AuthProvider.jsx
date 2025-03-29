import React, { useState } from "react";
import { createContext } from "react";
import cookies from "js-cookie";
import { useContext } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const initialUserState =
    cookies.get("jwt") || localStorage.getItem("messenger");

  //parse the user data and storing in state
  const [authUser, setAuthUser] = useState(
    initialUserState ? JSON.parse(initialUserState) : undefined
  );
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

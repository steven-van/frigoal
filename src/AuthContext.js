import React, { useState, createContext } from "react";

export const AuthContext = createContext();

function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, email, setEmail }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

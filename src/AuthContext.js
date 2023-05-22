import React, { useState, createContext, useEffect } from "react";

export const AuthContext = createContext();

function AuthContextProvider(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
        
        if (storedIsLoggedIn) {
          setIsLoggedIn(true);
        }
      }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
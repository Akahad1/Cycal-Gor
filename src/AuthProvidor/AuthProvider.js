import React, { useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, getAuth } from "firebase/auth";


// const auth =getAuth()
export const AuthContext=createContext()
// const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState()
    const authInfo={
        user,

    }
    return (
      <AuthContext.Provider value={{sahad:'sahad'}}>
        {children}

      </AuthContext.Provider>
    );
};

export default AuthProvider;
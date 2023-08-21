import React, { useState } from 'react';
import { createContext } from 'react';


export const AuthContext=createContext()
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
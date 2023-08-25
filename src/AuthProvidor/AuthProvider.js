import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import app from '../firebase.config';
const auth =getAuth(app)
export const AuthContext=createContext()
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState('')

    // Loginwithgoogle
    const loginwithgoogle =()=>{
      return signInWithPopup(auth, provider)

    }

     // create Eamil password
     const createEamilPassword=(email,password)=>{
      return createUserWithEmailAndPassword(auth, email, password)

  }
    // LogIN

    const login=(email,password)=>{
      return signInWithEmailAndPassword(auth,email,password)

    }
    // logout
    const logOut=()=>{
      return signOut(auth)
    }
    // update data

    const updataData=(profile)=>{
      return updateProfile(auth.currentUser,profile)
    }

    // abserver

    useEffect(()=>{
      const unSubcriber=onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        console.log(currentUser)
      })
      return ()=> unSubcriber
    },[])


    const authInfo={
        user,
        loginwithgoogle,
        createEamilPassword,
        login,
        logOut,
        updataData,

    }
    return (
      <AuthContext.Provider value={authInfo}>
        {children}

      </AuthContext.Provider>
    );
};

export default AuthProvider;
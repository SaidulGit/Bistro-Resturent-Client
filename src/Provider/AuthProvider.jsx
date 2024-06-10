import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/Firebase.config';

export const authContext=createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

const [loading,setLoading]=useState(true)
const [user,setUser] = useState(null)

useEffect(()=>{
  const unSubscribe =onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser);
        console.log('Current user',currentUser)
        setLoading(false)
    })
    return()=>{
      return unSubscribe();
    }
},[])
// create user
const createUser=(email,password)=>{
    setLoading(true)
  return createUserWithEmailAndPassword(auth,email,password)
}

// Sign in 
const signIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

// logout 
const logout = ()=>{
    setLoading(true)
    return signOut(auth)
}

// upDate profile 
const updateUserProfile = (name,photo)=>{
  return updateProfile(auth.currentUser, {
    displayName: name , photoURL: photo
  });
}



const authinfo = {
user,
loading,
createUser,
signIn,
logout,
updateUserProfile
}


  return (
    <authContext.Provider value={authinfo}>
      {children}
    </authContext.Provider>
  )
}

export default AuthProvider
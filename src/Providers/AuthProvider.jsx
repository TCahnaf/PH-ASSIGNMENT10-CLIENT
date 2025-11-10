import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth/cordova';





export const AuthContext = createContext();

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading, setLoading] = useState(true)

//Authentication Methods

const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
};

const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

 const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

  const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

  const logOut = () => {
    return signOut(auth);
  };

   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);



    const authInfo = {
        createUser,
        setUser,
        signIn,
        updateUser,
        logOut,
        user,
        googleSignIn,
        loading,
        setLoading
    }




    return ( 

        <AuthContext value = {authInfo}>{children}</AuthContext>
    )
       
};

export default AuthProvider;
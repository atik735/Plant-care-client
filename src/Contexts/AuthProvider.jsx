import React, { useEffect, useState } from 'react';
import { auth } from '../firebase.init';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const [payAmount,setPayAmount] =useState(10000)
    const googleProvider = new GoogleAuthProvider()


    const createUser = (email,password) =>{
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn =() =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }

    const signOutUser = () =>{
        setLoading(true)
        return signOut(auth)
     } 
     const Updprofile = (profile)=>{
         return updateProfile(auth.currentUser,profile)
     }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            // console.log("inside useeffect on auth state changed",currentUser);

            setUser(currentUser);
            setLoading(false)
        })

        return ()=>{
            unSubscribe()
        }
     },[])
 

    const userInfo = {
        user,
        setUser,
        loading,
        createUser,
        signInUser,
        googleSignIn,
        Updprofile,
        payAmount,
        setPayAmount,
        signOutUser
        }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
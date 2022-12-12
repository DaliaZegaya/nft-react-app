import { createContext, useContext, useEffect, useState } from 'react'

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    FacebookAuthProvider,
    sendPasswordResetEmail
} from 'firebase/auth'

import { auth } from '../firebase'
import { setUserId } from 'firebase/analytics';

const userAuthContext = createContext();

export const useUserAuth = () => {
    return useContext(userAuthContext)
}

export const UserAuthProvider = ( {children}) => {
    const [ user, setUser ] = useState("")

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const singUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut =() => {
        return signOut(auth)
    }

    const singInWithGoogle = () => {
        const googleAuthProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleAuthProvider)
    }


    useEffect(()=>{
        const Unsubscribe = onAuthStateChanged( auth, currentUser=>{
            setUser(currentUser)
            console.log(currentUser);
        } )
        return ()=>{
            Unsubscribe()
        }
        
    }, [])



    return (
        <userAuthContext.Provider value={{user, logIn, singUp, logOut, singInWithGoogle}}>
            {children}
        </userAuthContext.Provider>
    )
}
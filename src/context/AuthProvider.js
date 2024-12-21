import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from "../firebaseInit";
    
const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [currentUser,setCurrentUser] = useState(null);
    const [loading,setLoading] = useState(true);

    //signin 
    const signin = async (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }

    //signup

    const signup =async (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    //logout

    const logout = () =>{
        return signOut(auth);
    }

    useEffect(() =>{
       const unsubscribe = onAuthStateChanged(auth,(user) =>{
        console.log('user',user);
            setCurrentUser(user);
            //setLoading(false);
        });
        return unsubscribe;
    },[]);

    const value = {
        currentUser,
        signin,
        signup,
        logout
    }

    return (
        <AuthContext.Provider  value = {value}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext} 
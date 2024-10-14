import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './../firebase/firebase.config';
import axios, { Axios } from "axios";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const laggedUser = {email: userEmail}
            setUser(currentUser)
            setLoading(false)
            console.log('current user is', currentUser);

            if (currentUser){
                axios.post('http://localhost:5000/jwt', laggedUser, {withCredentials : true})
                .then(res => {
                    console.log("token response",res.data);
                })
            }else{
                axios.post('http://localhost:5000/logout', laggedUser, {withCredentials: true})
                .then(res => {
                    console.log(res.data);
                })
            }
        });
        return () => {
            return unSubscribe();
        }
    }, [])

    const authInfo = { user, loading, createUser, signIn, logOut, signInGoogle }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
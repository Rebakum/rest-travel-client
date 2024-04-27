import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebaseConfig";
import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

//-------social auth Provider----
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterprovider = new TwitterAuthProvider();


const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true)
    console.log(currentUser)

    //-------createUser------
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };



    //-----signIn-user--------

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };
    //------google login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    //------github login
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }
    //------twitter login
    const twitterLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, twitterprovider)
    }

    //------logout-------
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    //----- observer----
    useEffect(() => {
        onAuthStateChanged(auth, (User) => {
            setLoading(false)
            setCurrentUser(User)

        });


    }, [loading])


    const allValue = {
        currentUser,
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        twitterLogin,
        logOut
    }
    return (
        <div>
            <AuthContext.Provider value={allValue}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
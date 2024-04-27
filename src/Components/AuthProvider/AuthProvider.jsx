import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebaseConfig";

export const AuthContext = createContext(null);
// const [currentUser, setCurrentUser] = useState()


const AuthProvider = ({children}) => {

const createUser =(email, password)=>{
   return createUserWithEmailAndPassword(auth, email, password)
}

 

    const allValue={
        // currentUser,
        createUser
    }
    return (
        <div>
            <AuthContext.Provider value={allValue}>
        {           children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
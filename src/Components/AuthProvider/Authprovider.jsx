import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from "../../Firebase/firebase.config";





export const AuthContext=createContext()

const Authprovider = ({children}) => {

    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState(null)


 const createUser=( email, password )=>{
    setLoading(false)
    return createUserWithEmailAndPassword(auth, email,password)


 }

 useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
     
 })

    return ()=>{
        return unsubscribe()
    }

 },[])






const authinfo={
    loading,
    user,
    createUser,


}

    return (
        <AuthContext.Provider value={authinfo}>
               {children}
        </AuthContext.Provider>
    );
};


Authprovider.propTypes={
    children:PropTypes.node,
}

export default Authprovider;
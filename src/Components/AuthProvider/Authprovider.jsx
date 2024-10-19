import { createContext } from "react";
import PropTypes from 'prop-types';




const AuthContext=createContext()

const Authprovider = ({children}) => {



const authinfo={
    
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
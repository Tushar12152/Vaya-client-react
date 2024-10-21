import { useContext } from "react";
import { AuthContext } from "../src/Components/AuthProvider/Authprovider";

const useAuth = () => {

    const result= useContext(AuthContext)

    return result;
};

export default useAuth;
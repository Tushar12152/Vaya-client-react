import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";


const DashBoard = () => {

const {logOut}= useAuth()
const navigate=useNavigate()
const handleSignOut=()=>{
    logOut()
    navigate('/')
    toast.success('logged out')
}

    // const axiosSecure=useAxiosSecure()


    //    const Admin=specificuser?.role==='admin'


    // console.log(Admin);

    return (
        <div className="grid grid-cols-12 h-full ">


            <div className="col-span-4 md:col-span-3 min-h-screen text-center text-white bg-slate-600 ">




                <div className="mt-20  menu">
                    <hr />
                    <li >
                        <NavLink to="/">
                            <FaHome />
                            Home</NavLink>
                    </li>
                    <li onClick={handleSignOut}>
                        <NavLink >
                            <FaSignOutAlt/>
                            Log Out</NavLink>
                    </li>
                </div>
            </div>


            <div className="col-span-8 md:col-span-9 p-10 min-h-screen">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;
import { NavLink, Outlet } from "react-router-dom";

import { FaHome } from "react-icons/fa";


const DashBoard = () => {
    // const axiosSecure=useAxiosSecure()
    
  
   


   
//    const Admin=specificuser?.role==='admin'


// console.log(Admin);

    return (
        <div className="grid grid-cols-12 h-full ">
             

             <div className="col-span-4 md:col-span-3 min-h-screen text-center text-white bg-slate-600 ">
                



                 <div className="mt-20  menu">
                    <hr/>
                 <li >
                                <NavLink to="/">
                                <FaHome/>
                                    Home</NavLink>
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
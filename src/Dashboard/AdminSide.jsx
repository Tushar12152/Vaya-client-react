import {  NavLink } from "react-router-dom";

const AdminSide = () => {
    return (
        

              <div className="mt-2 menu">
                   
                    <li >
                        <NavLink to="/dashboard/admin">
                           
                            Admin Profile</NavLink>
                    </li>
                   
                    <li >
                        <NavLink to="/dashboard/product">
                           
                        Add Products</NavLink>
                    </li>
                   
                    <li >
                        <NavLink to="/dashboard/request">
                            
                        Requested products</NavLink>
                    </li>
                   
                    <li >
                        <NavLink to="/dashboard/delivered">
                           
                        Delivered Products</NavLink>
                    </li>
                    <li >
                        <NavLink to="/dashboard/all">
                           
                        All Products</NavLink>
                    </li>
                   
                </div>

       
    );
};

export default AdminSide;
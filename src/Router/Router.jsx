import { createBrowserRouter } from "react-router-dom"
import Layout from "../Layout/Layout"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Shop from "../Pages/Shop"
import Blog from "../Pages/Blog"
import Contact from "../Pages/Contact"
import Login from "../Components/Login"
import Signup from "../Components/Signup"
import DashBoard from "../Dashboard/Dashboard"
import AdminProfile from "../Dashboard/DashboardComponents/AdminProfile"
import AddProduct from "../Dashboard/DashboardComponents/AddProduct"
import AllProducts from "../Dashboard/DashboardComponents/AllProducts"
import Requested from "../Dashboard/DashboardComponents/Requested"
import Delivered from "../Dashboard/DashboardComponents/Delivered"

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>,
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/shop",
                element:<Shop/>
            },
            {
                path:"/blog",
                element:<Blog/>
            },
            {
                path:'contact',
                element:<Contact/>
            },

            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/signup',
                element:<Signup/>
            },
            
        ]

    },
    {
        path:'/dashboard',
        element:<DashBoard/>,
        children:[
            {
                path:'/dashboard/admin',
                element:<AdminProfile/>
            },
            {
                path:'/dashboard/product',
                element:<AddProduct/>
            },
            {
                path:'/dashboard/all',
                element:<AllProducts/>
            },
            {
                path:'/dashboard/request',
                element:<Requested/>
            },
            {
                path:'/dashboard/delivered',
                element:<Delivered/>
            },
        ]
    },
])

export default Router
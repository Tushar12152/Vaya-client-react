import { createBrowserRouter } from "react-router-dom"
import Layout from "../Layout/Layout"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Shop from "../Pages/Shop"
import Blog from "../Pages/Blog"
import Contact from "../Pages/Contact"
import Login from "../Components/Login"
import Signup from "../Components/Signup"

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
    }
])

export default Router
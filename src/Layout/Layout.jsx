import { Outlet } from "react-router-dom"
import Nav from "../Components/Nav"
import Footer from "../Components/Footer"


const Layout = () => {
  return (
    <div>
         <Nav/>
         <Outlet/>
       <div className="mt-20">
       <Footer/>
       </div>
    </div>
  )
}

export default Layout
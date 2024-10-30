import { BsHeadset, BsTwitter, BsYoutube } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import { ImInstagram } from "react-icons/im"
import { LiaLinkedin } from "react-icons/lia"
import { Link, NavLink } from "react-router-dom"
import logo from '../assets/NavLogo.webp'
import { BiSearch, BiShoppingBag, BiUser } from "react-icons/bi"
import useAuth from "../../Hooks/useAuth"

  

const Nav = () => {

     const {user}=useAuth()

     const navLink= <div className="flex items-center justify-start gap-4">
           <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-slate-700 text-white p-3 rounded-lg" : " "}> Home </NavLink>
           <NavLink to="about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-slate-700 text-white  p-3 rounded-lg" : ""}> About US </NavLink>
           <NavLink to="/shop" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-slate-700 text-white  p-3 rounded-lg" : ""}> Shop  </NavLink>
           <NavLink to="/blog" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-slate-700 text-white  p-3 rounded-lg" : ""}> Blog </NavLink>
           <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-slate-700 text-white  p-3 rounded-lg" : ""}> Contact </NavLink>
           

     </div>


  return (
   <div>
      {/* navHeader */}
     <div className="w-full bg-slate-600 p-2">
         <div className="w-[80%] mx-auto flex justify-between items-center">
                <div>
                    <h3 className="text-gray-400">Get Up to 30% OFF Store wide – Limited time only</h3>
                </div>
                <div className="flex items-center gap-8">
                     <div>
                          <Link className="border-r-2 text-gray-400 px-2"  to='#'>Newsletter</Link>
                          <Link className="border-r-2 text-gray-400 px-2"  to='#'>Trace order</Link>
                          <Link className="border-r-2 text-gray-400 px-2"  to='#'>Contact us</Link>
                          <Link className="border-r-2 text-gray-400 px-2"  to='#'>Sitemap</Link>
                     </div>
                     <div className="flex">
                          <span className="text-gray-400 px-2 font-sm"> <FaFacebookF/> </span>
                          <span className="text-gray-400 px-2 font-sm"> <BsTwitter/> </span>
                          <span className="text-gray-400 px-2 font-sm"> <BsYoutube/> </span>
                          <span className="text-gray-400 px-2 font-sm"> <LiaLinkedin/> </span>
                          <span className="text-gray-400 px-2 font-sm"> <ImInstagram/> </span>
                     </div>
                </div>
         </div>
    </div>

    {/* navBody */}

      <div className="w-[80%] mx-auto py-5 flex  items-center justify-between">
           <div className="flex gap-6">
               <img className="text-md w-36 pr-5 border-r-2" src={logo} alt="" />
                <div className="flex gap-6 items-center">
                   <span className="text-5xl font-bold"><BsHeadset/> </span>
                    <div>
                         <h1 className="font-bold text-lg text-gray-700 border-b-2">Email us: support@storesupport.com</h1>
                         <h1 className="font-bold text-lg text-gray-700">Call us: +0123 456 789</h1>
                    </div>
                </div>
           </div>


           <div className="flex gap-6 items-center justify-center">
                <div className="flex items-center justify-center ">
                     <input className="p-2 border w-[300px] border-black " placeholder="search...." type="search" name="" id="" />
                     <button className="bg-slate-700 text-white p-[13px] "><BiSearch/></button>
                </div>
                <div className="flex justify-center items-center gap-6">
                    <Link to={user?'/dashboard':'/login'} className="px-4 btn hover:bg-slate-700 bg-gray-400">
                         <BiUser/>
                    </Link>

                    <span className="px-4 btn hover:bg-slate-700 bg-gray-400">
                      <span>$00</span>    <BiShoppingBag/>
                    </span>

                </div>

           </div>
      </div>

   
      {/* navbarEnd */}
     
      <div className="bg-slate-600">
          <div className="text-white pl-0 p-5 w-[80%] mx-auto">
         { navLink}
          </div>
      </div>

   </div>
  )
}

export default Nav
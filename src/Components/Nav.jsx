import { BsTwitter, BsYoutube } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import { ImInstagram } from "react-icons/im"
import { LiaLinkedin } from "react-icons/lia"
import { Link } from "react-router-dom"

  

const Nav = () => {
  return (
   <div>
      {/* navHeader */}
     <div className="w-full bg-slate-900 p-2">
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
   </div>
  )
}

export default Nav
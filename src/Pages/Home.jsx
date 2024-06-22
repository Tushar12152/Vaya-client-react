import HomeLeft from "../Components/HomeLeft"
import HomeRight from "../Components/HomeRight"
import Service from "../Components/Service"

const Home = () => {
  return (
    <div>
        <div className="mt-10">
            <Service/>
        </div>

         {/* bannerAndCategories */}

        <div className="flex gap-6 w-[80%] mx-auto mt-10">
    
             <div className="w-[35%]">
                 <HomeLeft/>
             </div>
             <div className="w-[65%]">
                  <HomeRight/>
             </div>

        </div>



    </div>
  )
}

export default Home
import service1 from '../assets/service1.webp'
import service2 from '../assets/service2.webp'
import service3 from '../assets/service3.webp'

const Service = () => {
  return (
    <div className=''>
             <div className="w-[80%] mx-auto flex items-center justify-around border-b-2 pb-6">
                  <div className='flex gap-6 items-center'>
                       <img className='w-16' src={service1} alt="" />
                       <div>
                           <h1 className="font-bold  text-lg">FREE Shipping & Return</h1>
                           <h1 className="text-lg">Lorem ipsum dolor sit amet, consectetur</h1>
                       </div>
                  </div>

                  <div className='flex gap-6 items-center'>
                       <img className='w-16' src={service2} alt="" />
                       <div>
                           <h1 className="font-bold  text-lg">Money Back Guarantee</h1>
                           <h1 className="text-lg">Lorem ipsum dolor sit amet, consectetur</h1>
                       </div>
                  </div>

                  <div className='flex gap-6 items-center'>
                       <img className='w-16' src={service3} alt="" />
                       <div>
                           <h1 className="font-bold  text-lg">24/7 Online Support</h1>
                           <h1 className="text-lg">Lorem ipsum dolor sit amet, consectetur</h1>
                       </div>
                  </div>
             </div>

    </div>
  )
}

export default Service
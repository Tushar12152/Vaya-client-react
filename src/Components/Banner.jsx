import slide1 from '../assets/slide-01.webp'
import slide2 from '../assets/slide-02.webp'
import banner1 from '../assets/banner-01.webp'
import banner2 from '../assets/banner-02.webp'
import banner3 from '../assets/banner-03.webp'




const Banner = () => {


    const bannerInfo=[
        {
            id:1,
            image:banner1,
            description:'On selected Womens footwear',
            discount:'20% OFF'
        },
        {
            id:2,
            image:banner2,
            description:'On selected mens fashion',
            discount:'25% OFF'
        },
        {
            id:3,
            image:banner3,
            description:'On selected kids fashion',
            discount:'30% OFF'
        },
    ]

    return (
        <div>
            {/* carosel */}
            <div className="carousel w-full">

                <div id="slide1" className="carousel-item relative w-full">
                     
              <div className='relative'>
                   <img src={slide1} alt="" />
                   <div className='absolute top-72 left-24'> 
                    <h3 className="text-white font-semibold">Up to 70% off</h3>
                    <h2 className='text-xl text-white py-3 font-bold'>WOMENS CLOTHING</h2>
                     <button className='p-3 bg-white hover:bg-transparent font-bold hover:text-white'>Shop Now</button>
                   </div>

              </div>
                     

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                   
                <div className='relative'>
                   <img src={slide2} alt="" />
                   <div className='absolute top-72 right-24'> 
                    <h3 className="text-white font-semibold">Up to 70% off</h3>
                    <h2 className='text-xl text-white py-3 font-bold'>WOMENS CLOTHING</h2>
                     <button className='p-3 bg-white hover:bg-transparent font-bold hover:text-white'>Shop Now</button>
                   </div>

              </div>


                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>

             <div className='mt-10 flex gap-6'>
                    {
                        bannerInfo.map(card=><div key={card?.id}>
                             <div className='relative'>
                                 <img src={card?.image} alt="" />
                                 <h1 className="text-lg w-full p-2 bg-gray-600 text-white text-center">{card?.description}</h1>

                                 <span className='py-7 px-2  absolute  top-60  right-1 rounded-full text-white  bg-[#FF8A65]'>
                                    {card?.discount}
                                 </span>
                             </div>
                        </div>)
                    }
             </div>


        </div>
    )
}

export default Banner
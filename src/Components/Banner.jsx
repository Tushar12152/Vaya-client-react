import slide1 from '../assets/slide-01.webp'
import slide2 from '../assets/slide-02.webp'



const Banner = () => {
    return (
        <div>
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
        </div>
    )
}

export default Banner
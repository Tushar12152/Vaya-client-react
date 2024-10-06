

const About = () => {
  return (
    <div>
      
       {/* About Us Section */}
       <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          
          {/* Video Placeholder */}
          <div className="w-full max-w-2xl mx-auto mb-8">
            <div className=" w-full h-64 flex items-center justify-center">
            <div className="w-full max-w-2xl mx-auto my-2 ml-10">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/rJNBGqiBI7s?si=QEQAaeeVVUc4IuwB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
            </div>
          </div>

          {/* Content with Image */}
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-4">
              <img src="https://via.placeholder.com/500" alt="Sweater" className="rounded-lg" />
            </div>
            <div className="w-full md:w-1/2 p-4">
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque hendrerit lobortis.
                Suspendisse potenti. Cras feugiat felis nec luctus risus aliquam.
              </p>
            </div>
          </div>

          {/* Our History Section */}
          <div className="flex flex-wrap mt-8">
            <div className="w-full md:w-1/2 p-4">
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta aliquet ex non blandit.
                Nulla facilisi. Fusce viverra enim id nunc. Cras velit elit, vestibulum et pulvinar sed, lobortis ut quam.
              </p>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <img src="https://via.placeholder.com/500" alt="Hat" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-4 gap-6">
            <div>
              <h3 className="text-4xl font-bold">435</h3>
              <p className="text-gray-600">Dolore Magna</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">232</h3>
              <p className="text-gray-600">Pharetra Faucibus</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">543</h3>
              <p className="text-gray-600">Sollicitudin</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">314</h3>
              <p className="text-gray-600">Cupidatat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-4 gap-6">
            <div>
              <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full mb-4" />
              <h3 className="text-xl font-semibold">Marianne Hayes</h3>
              <p className="text-gray-600">CEO</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full mb-4" />
              <h3 className="text-xl font-semibold">Steve Greer</h3>
              <p className="text-gray-600">Solicitudin</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full mb-4" />
              <h3 className="text-xl font-semibold">Juanita Berry</h3>
              <p className="text-gray-600">Egestas</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full mb-4" />
              <h3 className="text-xl font-semibold">Jessie Campbell</h3>
              <p className="text-gray-600">Sociis Nascetur</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
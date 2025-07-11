import React from 'react'

function WhoWeAre() {
  return (
    <div>
      <section id="whoweare" className="py-16 bg-gray-50 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
              We are a passionate team committed to driving change through
              innovation and collaboration. Our platform is designed to empower
              individuals and organizations to unlock their true potential.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/723072/pexels-photo-723072.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Who we are"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhoWeAre

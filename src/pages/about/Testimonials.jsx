import React from 'react'

function Testimonials() {
  return (
    <div>
       <section id="testimonials" className="bg-white py-16 px-6">
  <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
    Testimonials
  </h2>

  <div className="flex flex-col gap-6 max-w-4xl mx-auto">
    {[
      {
        name: "Linda Martins",
        review: "I've been shopping from this store for a long time now. Don’t think twice — just buy!",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        stars: 5,
        bg: "bg-indigo-100",
      },
      {
        name: "Jason Phillips",
        review: "These shoes are the best product I’ve bought in years! Awesome comfort.",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        stars: 4,
        bg: "bg-yellow-100",
      },
      {
        name: "Peter Smith",
        review: "I had the time of my life during my visit in the product! They received me with open arms and I felt like home. Would recommend 100%",
        image: "https://randomuser.me/api/portraits/men/54.jpg",
        stars: 5,
        bg: "bg-blue-100",
      },
      {
        name: "Timothy Vermont",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatem molestias.",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        stars: 4,
        bg: "bg-orange-100",
      },
      {
        name: "Jane Doe",
        review: "Again and wow! Highly recommend it!",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
        stars: 5,
        bg: "bg-purple-100",
      },
    ].map((t, i) => (
      <div key={i} className={`rounded-xl shadow-md p-5 flex items-start gap-4 ${t.bg}`}>
        <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover" />
        <div>
          <p className="text-gray-700 italic mb-2">“{t.review}”</p>
          <h4 className="font-semibold text-gray-800">{t.name}</h4>
          <div className="flex text-yellow-500 mt-1">
            {Array.from({ length: t.stars }).map((_, i) => (
              <span key={i}>★</span>
            ))}
            {Array.from({ length: 5 - t.stars }).map((_, i) => (
              <span key={i} className="text-gray-300">★</span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
    </div>
  )
}

export default Testimonials

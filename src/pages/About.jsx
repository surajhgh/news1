import React, { useRef } from "react"
import emailjs from "emailjs-com"

const About = () => {
  const formRef = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // replace with EmailJS service ID
        "YOUR_TEMPLATE_ID", // replace with your template ID
        formRef.current,
        "YOUR_USER_ID" // replace with your public user key
      )
      .then(
        () => {
          alert("Message sent successfully!")
          formRef.current.reset()
        },
        (error) => {
          alert("Failed to send message. Try again later.")
          console.error(error)
        }
      )
  }

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className=" min-h-screen bg-gray-50 flex flex-col">
      {/* Nav */}
      <nav className="bg-white shadow px-6 py-4 sticky top-0 z-10">
        <div className="flex flex-wrap gap-4 justify-center text-blue-700 font-semibold cursor-pointer">
          <span onClick={() => scrollToSection("whoweare")}>Who We Are</span>
          <span onClick={() => scrollToSection("whatwedo")}>What We Do</span>
          
          <span onClick={() => scrollToSection("team")}>Meet Our Team</span>
          <span onClick={() => scrollToSection("testimonials")}>Testimonials</span>
          <span onClick={() => scrollToSection("feedback")}>Audience Feedback</span>
        </div>
      </nav>


      {/* Who We Are */}
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

      {/* What We Do */}
      <section id="whatwedo" className="py-16 bg-white px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 pl-4 border-blue-500">
    What We Do
  </h2>

  <div className="text-gray-600 leading-relaxed space-y-6 text-lg">
    <p>
      We are committed to delivering fast, free, and factual news to a global audience — breaking barriers of language, access, and trust. In an era filled with noise and misinformation, we strive to provide content that’s not only accurate but also meaningful and easy to access for everyone, everywhere.
    </p>

    <p>
      Our platform is built to serve as a reliable gateway to the world’s most important stories, covering events as they unfold, across every continent and every category. Whether you're looking for headlines that affect global politics or human stories from your neighborhood, our mission is to inform with clarity and integrity.
    </p>

    <p className="font-semibold text-gray-800">We offer:</p>

    <ul className="list-disc list-inside space-y-2">
      <li>
        <strong>Real-time global news:</strong> Continuous updates across categories such as politics, economy, health, science, entertainment, and climate.
      </li>
      <li>
        <strong>Regional & local storytelling:</strong> Bringing underreported and grassroots-level stories to light with the same priority as global headlines.
      </li>
      <li>
        <strong>Multimedia experiences:</strong> High-quality journalism through articles, interviews, videos, infographics, and podcasts.
      </li>
      <li>
        <strong>Public accessibility:</strong> News is freely available across all digital platforms — mobile, desktop, email newsletters, and social media.
      </li>
      <li>
        <strong>Editorial transparency:</strong> All stories are thoroughly fact-checked by our editorial team before being published.
      </li>
      <li>
        <strong>Audience-first innovation:</strong> Features like language translation, voice-to-text, and personalized news feeds help make news more inclusive.
      </li>
    </ul>

    <p>
      Our commitment goes beyond headlines — we believe in building an informed society, empowering individuals with truth, and creating space for diverse voices in the global narrative. Through continuous innovation and ethical journalism, we aim to become not just a news platform, but a trusted part of your daily life.
    </p>
  </div>
</section>


      

      {/* Meet Our Team */}
      <section id="team" className="w-full bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Jaime Lannister",
              role: "CEO",
              image: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
            },
            {
              name: "Cersei Lannister",
              role: "CTO",
              image: "https://cdn-icons-png.flaticon.com/128/4140/4140037.png",
            },
            {
              name: "Daenerys Targaryen",
              role: "Lead Designer",
              image: "https://cdn-icons-png.flaticon.com/128/6997/6997662.png",
            },
          ].map((member, i) => (
            <div key={i} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
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

      {/* Audience Feedback */}
      <section id="feedback" className="bg-gray-50 py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Audience Feedback
        </h2>
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-white shadow-md rounded p-6 space-y-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full border p-2 rounded"
          />
          <textarea
            name="message"
            placeholder="Your Feedback"
            required
            className="w-full border p-2 rounded h-32"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit Feedback
          </button>
        </form>
      </section>
    </div>
  )
}

export default About

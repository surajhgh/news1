import React from 'react'

function MeetOurTeam() {
  return (
    <div>
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
    </div>
  )
}

export default MeetOurTeam

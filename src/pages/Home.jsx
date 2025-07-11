import Advertise from "@/components/shared/Advertise"
import PostCard from "@/components/shared/PostCard"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Home = () => {
  const [posts, setPosts] = useState([])

  // console.log(posts)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts?limit=6")

      const data = await res.json()

      if (res.ok) {
        setPosts(data.posts)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div>
<div  className="p-4">
  <div className=" p-28 bg-[url('/dailyinsight1.jpg')] bg-cover bg-center bg-no-repeat min-h-60 flex flex-col gap-6 max-w-6xl mx-auto  rounded-xl">
    <h1 className="text-4xl font-bold text-lime-500">
      Welcome to <span className="text-red-600">Daily Insight</span>
    </h1>

    <p className="text-white mt-3 text-lg">
      Your trusted source for the latest headlines, in-depth analysis, and
      breaking news every morning.
    </p>

    <p className="text-slate-300 mt-1 italic">Stay informed, stay ahead.</p>

    <Link to={"/search"}>
      <Button className="bg-yellow-400 hover:bg-yellow-600 text-black py-3 px-6 rounded-full font-semibold shadow-lg flex items-center gap-2 w-fit">
        View all posts <ArrowRight className="h-5 w-5" />
      </Button>
    </Link>
  </div>
</div>



 


      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
  {/* ✅ Recent Posts section (same as before) */}
  {posts && posts.length > 0 && (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-slate-700">Recent Posts</h2>

      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>

      <Link
        to={"/search"}
        className="text-lg hover:underline text-center font-semibold"
      >
        View all news
      </Link>
    </div>
  )}

  {/* ✅ Grouped by Category Section (this is new) */}
  {posts.length > 0 && (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-slate-700 mb-6">Featured Categories</h2>

      {Object.entries(
        posts.reduce((acc, post) => {
          const cat = post.category;
          if (!acc[cat]) acc[cat] = [];
          acc[cat].push(post);
          return acc;
        }, {})
      ).map(([category, groupedPosts]) => (
        <div key={category} className="mb-10">
          <h3 className="text-xl font-semibold text-blue-800 capitalize mb-3">
            {category}
          </h3>

          <div className="flex flex-wrap gap-4">
            {groupedPosts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>

          <Link
            to={`/search?category=${category}`}
            className="text-md mt-4 inline-block text-blue-600 hover:underline"
          >
            View all {category}
          </Link>
        </div>
      ))}
    </div>
  )}
</div>


      
        

      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            Why You'll Love Daily Insight
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title={"Diverse Content"}
              description={
                "Explore news on a variety of topics, from technology to lifestyle."
              }
              icon="📚"
            />

            <FeatureCard
              title={"Community Driven"}
              description={
                "Connect with writers and readers who share your interests."
              }
              icon="🌐"
            />

            <FeatureCard
              title={"Easy to Use"}
              description={
                "A seamless platform for sharing and discovering great content."
              }
              icon="🚀"
            />
          </div>
        </div>
      </section>

      <div className="p-3 bg-white">
        <Advertise />
      </div>

      
    </div>
  )
}

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default Home

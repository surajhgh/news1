import React, { useEffect, useState } from 'react'

function Api() {
  const [newsData, setNewsData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_NEWS_API_URL}?country=us&category=general&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        )

        if (!response.ok) throw new Error("Failed to fetch news")

        const data = await response.json()
        setNewsData(data.articles)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

return (
  <div className="p-5">
    <div className='font-bold text-center text-4xl '>
      api news:
    </div>
    {newsData.map((article, index) => (
      <div
        key={index}
        className="flex flex-col md:flex-row gap-4 border rounded-md shadow p-4 mb-4"
      >
        {/* News Image */}
        {article.urlToImage && (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full md:w-48 h-32 object-cover rounded"
          />
        )}

        {/* News Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-blue-800">{article.title}</h3>
            <p className="text-gray-700 mt-1">{article.description}</p>
          </div>

          <div className="mt-3">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              🔗 Read Full Article
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
)

}

export default Api

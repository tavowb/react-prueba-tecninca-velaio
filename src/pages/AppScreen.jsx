import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import '../css/AppScreen.css'

const AppScreen = () => {
  const [data, setData] = useState()
  const getNews = async () => {
    const ENDPOINT_NEWS = 'https://newsapi.org/v2/top-headlines?country=co&apiKey=fefc7870c1df411d82c22715f34cc1bd'

    try {
      const res = await fetch(ENDPOINT_NEWS)
      const data = await res.json()
      const { articles } = await data
      const newData = articles
      setData(newData)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getNews()
  }, [])

  return (
    <div className='container  text-center mt-3'>
      <h1>Last News in Colombia</h1>
      <hr />
      {
        data &&
          <div className='row'>
            {data.map((data, index) => (
              <Card key={index} full={false} data={data} url={index} />
            ))}
          </div>
      }

    </div>
  )
}

export default AppScreen

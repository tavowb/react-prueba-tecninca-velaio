import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const LastNew = () => {
  const [data, setData] = useState()
  const [short, setShort] = useState()

  const getRandomFact = async () => {
    const ENDPOINT_NEWS = 'https://newsapi.org/v2/top-headlines?country=co&apiKey=fefc7870c1df411d82c22715f34cc1bd'

    try {
      const res = await fetch(ENDPOINT_NEWS)
      const data = await res.json()
      const { articles } = await data
      const newData = articles[0]
      setData(newData)
      const newShort = await newData.content.split('.', 1)
      setShort(newShort)
      console.log(newData)
      console.log(newShort)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRandomFact()
  }, [])

  return (
    <div>
      {data &&
        <div className='card'>
          <img src={data.urlToImage} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'> {data.title} </h5>
            <p className='card-text'> {short} </p>
            <Link className='card-link' to={data.url}>
              Ver más...
            </Link>
          </div>
        </div>}
    </div>

  )
}

export default LastNew

import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../css/bs.css'

const CharacterScreen = () => {
  const { id } = useParams()
  const [data, setData] = useState()
  const navigate = useNavigate()
  const getNews = async () => {
    const ENDPOINT_NEWS = 'https://newsapi.org/v2/top-headlines?country=co&apiKey=fefc7870c1df411d82c22715f34cc1bd'

    try {
      const res = await fetch(ENDPOINT_NEWS)
      const data = await res.json()
      const { articles } = await data
      const newData = articles[parseInt(id)]
      setData(newData)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getNews()
  }, [])

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className='container'>
      {data &&
        <div className='bs'>
          <div className='m-3 col-12 col-md-10'>
            <img className='img-thumbnail' src={data.urlToImage} alt='id' />
          </div>
          <div className='m-3 col-12 col-md-10'>
            <h2>{data.title} </h2>
            <p>Descripción: {data.description} </p>
            <p> {data.content} </p>
            <p>Author:  {data.source.name} <small>fecha: {data.publishedAt} </small> </p>
            <button onClick={handleBack} className='btn btn-outline-warning '>
              {' '}
              Go Back
            </button>
          </div>
        </div>}

    </div>
  )
}

export default CharacterScreen

import { useEffect, useState } from 'react'
import Climate from '../components/Climate'
const city = 'Santiago de Cali'
const country = 'Colombia'
const Wheather = () => {
  const [data, setData] = useState()
  const getNews = async () => {
    const ENDPOINT_WHEATHER = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=bb24676df5515d8e7ed2eb840659b999&lang=es`

    try {
      const res = await fetch(ENDPOINT_WHEATHER)
      const data = await res.json()
      const newData = await data

      setData(newData)
      console.log(newData)
      console.log(newData.weather[0].icon)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getNews()
  }, [])
  return (
    <div className=' mt-3'>
      <div className='container text-center'>
        <h1>Real time weather</h1>
        <hr />
      </div>
      <div className='container text-center d-flex justify-content-center'>
        {data &&
          <div>
            <Climate data={data} />
          </div>}
      </div>

    </div>

  )
}

export default Wheather

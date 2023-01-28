import React from 'react'

const Climate = ({ data }) => {
  const kelvin = 273.15
  return (
    <div
      className='card text-white bg-primary mb-3 ' style={{
        width: '400px'
      }}
    >
      <h1>Clima en tiempo real</h1>
      <hr />
      <div>
        <h5>Clima en {data.name} </h5>
        <h2>Temperatura:</h2>
        <h2> {data.main.temp - kelvin}C°</h2>
        <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt='Estado actual ' />
        <h5>{data.weather[0].description} </h5>
        <div className='row'>
          <div className='col'>
            <p>Max: {data.main.temp_max - kelvin}C°</p>
          </div>
          <div className='col'>
            <p>Min: {data.main.temp_min - kelvin}C°</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Climate

import React, { useState } from 'react'

const Climate = ({ data }) => {
  const kelvin = 273.15
  const [vars, setVars] = useState({
    name: data.name,
    temp: data.main.temp - kelvin,
    max: (data.main.temp_max - kelvin.toFixed(1)),
    min: data.main.temp_min - kelvin,
    icono: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
    descrip: data.weather[0].description
  })
  return (
    <div
      className='card text-white bg-primary mb-3 ' style={{
        width: '600px',
        height: '400px'
      }}
    >
      <h1>Clima en tiempo real</h1>
      <hr />
      <div>
        <h5>Clima en {vars.name} </h5>
        <h2>Temperatura:</h2>
        <h2> {vars.temp.toFixed(1)}C°</h2>
        <img src={vars.icono} alt='Estado actual ' />
        <h5>{vars.descrip} </h5>
        <div className='row'>
          <div className='col'>
            <p>Max: {vars.max.toFixed(1)}C°</p>
          </div>
          <div className='col'>
            <p>Min: {vars.min.toFixed(1)}C°</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Climate

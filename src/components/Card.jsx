import { Link } from 'react-router-dom'

const Card = ({ full, data, url }) => {
  return (
    <div
      className='container mb-3 col-12 col-md-3'
    >
      {data &&
        <div
          className='card 'style={{
            witdh: 200,
            height: 400
          }}
        >
          <img loading='lazy' src={data.urlToImage} alt={data.content} className='card-img-top' />
          <h6 className='card-title'> {data.title} </h6>
          <div className='card-body'>
            {full &&
              <div>
                <p className='card-text'> {data.description} </p>
              </div>}

            <Link className='card-link' to={`/news/${url}`}>
              Ver más...
            </Link>
          </div>
        </div>}

    </div>
  )
}

export default Card

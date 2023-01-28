import React from 'react'
const imagen = 'https://img.asmedia.epimg.net/resizer/e4gE7IZGmKXUAIKvLX6X3Qr4I6I=/644x362/filters:focal(1129x16:1139x26)/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/KRTFU2KHZ5BIZHVWZ4GTYMM5YE.jpg'

const News3 = () => {
  return (
    <div className='card-group'>
      <div className='container'>
        <img src={imagen} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>Card title</h5>
          <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className='card-text'><small className='text-muted'>Last updated 3 mins ago</small></p>
        </div>
      </div>

      <div className='card'>
        <img src={imagen} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>Card title</h5>
          <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          <p className='card-text'><small className='text-muted'>Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  )
}

export default News3

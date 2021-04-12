import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../component/Hero/Hero';
import './details.scss'

const Details = () => {

  let [details, setDetails] = useState(JSON.parse(localStorage.getItem('details')))
  let [img1,...images] = details.images;

  return (
    <div>
      <div className='detailHero' style={{background:`url(${img1}) no-repeat center/cover`, backgroundSize:'100% 100%'}}>
      <Hero>
      <h1>{details.name}</h1>
      <div className='line'></div>
      <Link to='/'>Back To Home</Link>
      </Hero>
      </div>
        <div className='details'>
          <div className='flex wrap'>{images.map((item, index)=><img key={index} src={item} alt='details'/>)}</div>
          <div className='flex'>
            <div className='shrink culoms'>
            <h1>Details</h1>
            <p>
              {details.description}
            </p>
            </div>

            <div className='shrink'>
              <h1>Info</h1>
              <div className='culoms'>
                <p>Price: {details.price} $</p>
                <p>Size: {details.size} SQFT</p>
                <p>Capacity: {details.capacity} person</p>
                <p>Capacity: {details.pets?'Pets Allow':'No Pets Allow'} person</p>
              </div>
            </div>

          </div>

          <div className='pets'>
            <h1>Extras</h1>
            <div className='flex wrap'>
              {details.extras.map((item, index)=><h4 key={index}>
                - {item}
              </h4>)}
            </div>
          </div>
          <Link to='/'>Back To Surf</Link>
        </div>

    </div>
  )
}

export default Details

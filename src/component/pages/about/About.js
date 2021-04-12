import React from 'react';
import { Link } from 'react-router-dom';
import './about.scss'

const About = () => {
  return (
    <div className='about'>
      <h1>About Us</h1>
      <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse natus et unde nobis! Tenetur officia dolorem deserunt iusto fugit ab voluptates reprehenderit aperiam, soluta sed assumenda aliquid libero, totam accusamus?
      </p>
      <Link to='/'>Back To Home</Link>
    </div>
  )
}

export default About

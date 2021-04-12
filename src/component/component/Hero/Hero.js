import React from 'react'
import './hero.scss'

const Hero = ({children}) => {
  return (
    <div className='hero'>
      {children}
    </div>
  )
}

export default Hero

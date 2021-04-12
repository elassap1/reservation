import React from 'react'
import './sections.scss'

const Sections = ({children}) => {
  return (
    <div className='section'>
      {children}
    </div>
  )
}

export default Sections

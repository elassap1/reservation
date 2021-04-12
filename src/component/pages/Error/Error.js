import React from 'react';
import { Link } from 'react-router-dom';
import './Error.scss';

const Error = () => {
  return (
    <div className='error'>
      <h1>404</h1>
      <h1>Page Not Found</h1>
      <h1><Link to='/'>Back To Home</Link></h1>
    </div>
  )
}

export default Error

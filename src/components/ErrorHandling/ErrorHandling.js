import React from 'react';
import './ErrorHandling.css';

const ErrorHandling = ({ error }) => {
  return (
    <div className='ErrorHandling'>
      <h1 className='errorStatus'>500</h1>
      <h2 className='errorMsg'>{error}</h2>
    </div>
  )
}

export default ErrorHandling;

import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorHandling.css';

const ErrorHandling = ({ error }) => {
  return (
    <div>
      <h1 className='errorStatus'>OOPS</h1>
      <h2 className='errorMsg'>{error}</h2>
      <Link className='wrong-path' to='/'>
        <button>Return to home</button>
      </Link>
    </div>
  );
};

export default ErrorHandling;


import './WrongPath.css';

import React from 'react';
import { Link } from 'react-router-dom';

const WrongPath = () => (
  <div className='wrong-path'>
    <h1>404 - Not Found!</h1>
    <Link className='wrong-path' to='/'>Go Home</Link>
  </div>
);

export default WrongPath; 
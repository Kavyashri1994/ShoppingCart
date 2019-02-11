import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.svg';
import './index.css';

class Page1 extends Component {
  render() {
    return (
      <div className='appDiv'>
      <div className='test'>
        <img src={logo} alt='Logo' className='appimg'/>
        <h2>Welcome to React</h2>
      </div>
      <Link to={'/firstComp'}>
        <button> Go To About Page</button>
      </Link>
    </div>
    );
  }
}

export default Page1;
'use strict';
import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {
  render() {
    require('./Header.css');
    return (
      <header>
        <nav className='websiteHeaderNav'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='page1'>Page 1</Link></li>
            <li><Link to='page2'>Page 2</Link></li>
            <li><Link to='invalidRoute'>Try a invalid route</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;

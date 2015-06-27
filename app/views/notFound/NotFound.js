'use strict';
import React from 'react';
import {Link} from 'react-router';

class NotFound extends React.Component {
  static entryPoint() { return 'notFound'; }
  render() {
    require('./NotFound.css');
    return (
      <div className='notFoundContainer'>
        The page requested does not exist. Please visit our <Link to='/'>Website</Link> for more information.
      </div>
    );
  }
}

export default NotFound;

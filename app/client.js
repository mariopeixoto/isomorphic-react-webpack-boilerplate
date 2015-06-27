'use strict';

/*global document */
import React from 'react';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import Router from 'react-router';

class Client {
  static run(routes, element) {
    React.render((
      <Router history={new BrowserHistory()}>
        {routes}
      </Router>
    ), element);

    var serverSideStyle = document.getElementById('server-side-style');
    if(serverSideStyle){
      document.getElementsByTagName('head')[0].removeChild(serverSideStyle);
    }
  }
}

export default Client;

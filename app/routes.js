'use strict';

import React from 'react';
import { Route } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
          {this.props.children}
      </div>
    );
  }
}

export default function(Website, NotFound, Page1, Page2) {
  return (
    <Route component={App}>
      <Route path='/' component={Website}>
        <Route path='page1' component={Page1} />
        <Route path='page2' component={Page2} />
      </Route>
      <Route path='*' component={NotFound} />
    </Route>
  );
}

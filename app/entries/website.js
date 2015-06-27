'use strict';

/*global document, window */
import React from 'react';
window.React = React;

import Client from '../client';
import buildRoutes from '../routes';

import Website from '../views/website/Website';
import NotFound from 'react-proxy!../views/notFound/NotFound';
import Page1 from 'react-proxy!../views/Website/Page1/Page1';
import Page2 from 'react-proxy!../views/Website/Page2/Page2';

const routes = buildRoutes(Website, NotFound, Page1, Page2);

Client.run(routes, document.getElementById('app'));

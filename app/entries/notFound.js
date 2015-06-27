'use strict';

/*global document, window */
import React from 'react';
window.React = React;

import Client from '../client';
import buildRoutes from '../routes';

import Website from 'react-proxy!../views/website/Website';
import NotFound from '../views/notFound/NotFound';

const routes = buildRoutes(Website, NotFound);

Client.run(routes, document.getElementById('app'));

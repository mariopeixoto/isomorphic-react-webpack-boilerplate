'use strict';
import React from 'react';
import Router from 'react-router';
import Location from 'react-router/lib/Location';
import styleCollector from './style-collector';
import buildRoutes from '../app/routes';
import buildEntryPoints, {Website, NotFound, Page1, Page2} from './entryPoints';

const routes = buildRoutes(Website, NotFound, Page1, Page2);

class Layout extends React.Component {
  render() {
    let entries = this.props.entryPoints.map((value) => {
      return (<script src={this.props.publicPath + this.props.assets[value]} key={value}></script>);
    });

    let hotUpdate;
    if (this.props.hot) {
      hotUpdate = (<script src={this.props.publicPath + 'devClient.js' }></script>);
    }

    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>Twisted Chips</title>
          <meta name='viewport' content='width=device-width' />
					<style id='server-side-style' dangerouslySetInnerHTML={{__html: this.props.css}} />
        </head>
        <body>
          <div id='app' dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
          <script src={this.props.publicPath + this.props.assets.shared}></script>
          {hotUpdate}
          {entries}
        </body>
      </html>
    );
  }
}

let layoutComponent = React.createFactory(Layout);

export default function(req, stats, hot) {
  var location = new Location(req.path, req.query);
  const assets = stats.assetsByChunkName;
  const publicPath = stats.publicPath;
  var html;
  Router.run(routes, location, function(error, initialState) {
    const entryPoints = buildEntryPoints(initialState.components);

  	let markup;
  	var css = styleCollector.collect(function() {
  		markup = React.renderToString(<Router {...initialState}/>);
  	});

  	html = React.renderToStaticMarkup(layoutComponent({
  		markup,
  		css,
      publicPath,
      assets,
      entryPoints,
      hot
  	}));

  });

  return html;
}

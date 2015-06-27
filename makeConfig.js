'use strict';
var webpack = require('webpack');
var path = require('path');
var glob = require('glob');

var buildEntries = function(hot) {
  var prefix = './app/entries/';
  var entryFiles = glob.sync(prefix + '*.js');
  var devServer = 'webpack-dev-server/client?http://localhost:3001';
  var hotModuleUpdate = 'webpack/hot/dev-server';
  var entries = {};
  entryFiles.map(function (entry) {
    var entryName = entry.slice(prefix.length).split('.js')[0];
    if(hot) {
      entries[entryName] = [entry, hotModuleUpdate];
    } else {
      entries[entryName] = entry;
    }
  });
  if (hot) {
    entries.devClient = devServer;
  }
  return entries;
};

var buildJsLoader = function(hot) {
  if (hot) {
    return ['react-hot', 'babel'];
  } else {
    return ['babel'];
  }
};

var buildPlugins = function(hot, plugins) {
  if (hot) {
    return plugins.concat([
      new webpack.HotModuleReplacementPlugin()
    ]);
  }
  return plugins;
};

module.exports = function makeConfig(hot, publicPath, root) {

  var _env = process.env.NODE_ENV;
  var env = {
    production: _env === 'production',
    staging: _env === 'staging',
    test: _env === 'test',
    development: _env === 'development' || typeof _env === 'undefined'
  };

  var jsLoaders = buildJsLoader(hot);
  var commonLoaders = [
  	{ test: /\.jsx?$/, loaders: jsLoaders, exclude: /node_modules/ },
  	{ test: /\.png$/, loader: 'url-loader' },
  	{ test: /\.jpg$/, loader: 'file-loader' },
  ];
  var assetsPath = path.join(__dirname, 'public', 'assets');

  var jsFileName = env.development === true ? '[name].js' : '[name].[hash].js';

  return [
  	{
  		// The configuration for the client
  		name: 'browser',
  		entry: buildEntries(hot),
  		output: {
  			path: assetsPath,
  			filename: jsFileName,
  			publicPath: publicPath
  		},
  		module: {
  			loaders: commonLoaders.concat([
  				{ test: /\.css$/, loader: 'style-loader!css-loader' },
  			])
  		},
  		plugins: buildPlugins(hot, [
        function(compiler) {
          this.plugin('done', function(stats) {
            require('fs').writeFileSync(path.join(__dirname, 'server', 'stats.generated.json'), JSON.stringify(stats.toJson()));
          });
        },
        new webpack.optimize.CommonsChunkPlugin('shared', jsFileName)
      ])
  	},
  	{
  		// The configuration for the server-side rendering
  		name: 'server-side rendering',
  		entry: root + '/server/page.js',
  		target: 'node',
  		output: {
  			path: assetsPath,
  			filename: root + '/../../server/page.generated.js',
  			publicPath: publicPath,
  			libraryTarget: 'commonjs2'
  		},
  		externals: /^[a-z\-0-9]+$/,
  		module: {
  			loaders: commonLoaders.concat([
  				{ test: /\.css$/,  loader: path.join(__dirname, 'server', 'style-collector') + '!css-loader' },
  			])
  		}
  	}
  ];
};

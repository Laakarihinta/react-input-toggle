var path = require('path');
var webpack = require('webpack');

var WebpackErrorNotificationPlugin = require('webpack-error-notification');

module.exports = {
  entry: {
    ghpages: 'ghpages/index.js'
  },
  resolve: {
    root: path.join(__dirname)
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: '/ghpages',
    publicPath: '/ghpages'
  },
  devtool: 'source-map',
  module: {
    preLoaders: [],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|react-a11y)/,
        loaders: ['babel']
      }, {
        test: /\.scss$/,
        loaders: ["style", "css", 'autoprefixer?browsers=last 2 versions', "sass"]
      }, {
        // TODO: Get ride of svgs in css
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?mimetype=image/svg+xml"
      }
    ],
    postLoaders: []
  },
  plugins: [new webpack.DefinePlugin({
      'process.env': {
        // 'NODE_ENV': JSON.stringify('production')
      }
    }), new webpack.NoErrorsPlugin(), new WebpackErrorNotificationPlugin(/* strategy */)]
}

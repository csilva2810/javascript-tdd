var webpack = require('webpack')
var path = require('path')
var nodeENV = process.env.NODE_ENV || 'production'

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: './build/bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['es6-shim', './src/index.ts'],
  devtool: 'source-map',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'maquette/redux/typescript/webpack'
  })]
};

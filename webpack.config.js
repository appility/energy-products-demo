const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

  module.exports = {
    entry: path.resolve(__dirname, 'src/index'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/' 
    },
    module: {
      rules: [{
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: ['babel-loader']
      }]
    },
    devServer: {
      contentBase:  path.resolve(__dirname, 'dist'),
      port: 9000,
      historyApiFallback: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html" //source html
      })
    ]
  };
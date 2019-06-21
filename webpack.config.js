const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'VanillaWeb - Webpack',
      template: './src/index.html'
    })
  ],
  devServer: {
    port: 9081
  }
};

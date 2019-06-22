const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
    }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    port: 9081
  }
};

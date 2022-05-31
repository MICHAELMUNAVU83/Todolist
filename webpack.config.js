const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry:
  {
    bundle: path.resolve(__dirname, 'src/index.js'),

  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 5000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,

  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
      ],
    },

    ],

  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack app',
      filename: 'index.html',
      template: 'src/index.html',

    }),
  ],
};

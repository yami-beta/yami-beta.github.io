const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

let plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src', 'index.html')
  }),
];

let devtool = 'inline-source-map';

if (process.env.NODE_ENV === 'production') {
  plugins = [
    ...plugins,
    new UglifyJsPlugin({
      sourceMap: false,
    }),
  ];
  devtool = null;
}

module.exports = {
  entry: {
    index: [ path.resolve(__dirname, 'src', 'index.js') ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1, modules: true, localIdentName: '[path][name]--[local]--[hash:base64]' } },
        ],
      }
    ],
  },
  plugins,
  devtool,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
  },
};

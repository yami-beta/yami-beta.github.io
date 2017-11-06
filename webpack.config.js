const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

let plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
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
  devtool = false;
}

module.exports = {
  entry: {
    index: [ path.resolve(__dirname, 'src', 'index.js') ]
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: '[name].js',
    publicPath: '/assets'
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
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { importLoaders: 1, modules: true, localIdentName: '[path][name]--[local]--[hash:base64]' } },
          { loader: 'sass-loader' },
        ],
      }
    ],
  },
  plugins,
  devtool,
  devServer: {
    contentBase: path.resolve(__dirname),
  },
};

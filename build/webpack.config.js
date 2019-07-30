const path = require('path');

const jsLoader = {
  test: /\.js$/,
  loaders: [{
    loader: 'babel-loader',
    options: {
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            corejs: 2,
          },
        ],
      ],
      presets: ['@babel/preset-env'],
    },
  },
  ],
  include: [
    path.resolve(__dirname, '../source'),
  ],
  exclude: [
    path.resolve(__dirname, '../node_modules'),
  ],
};

module.exports = {
  mode: 'development',
  entry: {
    index: '../source/index.js',
  },
  context: path.resolve(__dirname, '../source'),
  devtool: false,
  node: {
    fs: 'empty',
  },
  output: {
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules'],
  },
  module: {
    rules: [
      jsLoader,
    ],
  },
  target: 'web',
};

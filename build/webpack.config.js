const path = require('path');

const tsLoader = {
  test: /\.ts|\.tsx$/,
  loaders: [{
    loader: 'ts-loader',
  }],
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
    index: '../source/index.ts',
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
    extensions: ['.ts', '.js', '.json'],
    modules: ['node_modules'],
  },
  module: {
    rules: [
      tsLoader,
    ],
  },
  target: 'web',
};

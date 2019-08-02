const path = require('path');

const tsLoader = {
  test: /\.ts|\.tsx$/,
  use: 'ts-loader',
  include: [
    path.resolve(__dirname, '../source'),
  ],
  exclude: [
    path.resolve(__dirname, '../node_modules'),
  ],
};

const coverageLoader = {
  test: /\.ts|\.tsx$/,
  use: 'istanbul-instrumenter-loader',
  include: [
    path.resolve(__dirname, '../source'),
  ],
  exclude: [/__tests__/]
};

module.exports = {
  mode: 'development',
  entry: {
    index: '../source/IframeManager.ts',
  },
  context: path.resolve(__dirname, '../source'),
  devtool: 'inline-source-map',
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
      coverageLoader,
      tsLoader,
    ],
  },
  target: 'web',
};

const path = require('path');
const { argv } = require('yargs');

module.exports = (target) => {
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
    exclude: [/__tests__/],
  };

  const config = {
    mode: argv.mode || 'development',
    entry: {
      index: '../source/IframeManager.ts',
    },
    context: path.resolve(__dirname, '../source'),
    devtool: argv.mode === 'production' ? 'none' : 'inline-source-map',
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

  if (target === 'test') {
    config.module.rules = [coverageLoader, ...config.module.rules];
  }

  return config;
};

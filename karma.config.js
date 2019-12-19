const webpackConfig = require('./build/webpack.config');

const testFiles = 'source/**/__tests__/*.test.ts';

module.exports = (config) => {
  config.set({
    singleRun: true,
    files: [
      testFiles,
    ],
    frameworks: ['mocha'],
    reporters: ['mocha', 'coverage-istanbul'],
    browsers: ['ChromeHeadlessNoSandbox'],

    // `--no-sandbox` is required by jenkins
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--disable-gpu',
          '--enable-logging',
          '--no-default-browser-check',
          '--no-first-run',
          '--disable-default-apps',
          '--disable-popup-blocking',
          '--disable-translate',
          '--disable-background-timer-throttling',
          '--disable-renderer-backgrounding',
          '--disable-device-discovery-notifications',
          '--remote-debugging-port=9222',
          '--disable-web-security',
        ],
      },
    },

    // Diffs are disabled by default
    mochaReporter: {
      showDiff: true,
    },

    // We need to preprocess test files with webpack
    preprocessors: {
      [testFiles]: 'webpack',
    },

    coverageIstanbulReporter: {
      reports: ['html', 'text'],
      dir: 'coverage',
    },

    // karma-webpack config options
    webpack: webpackConfig('test'),

    // Timeout settings
    browserNoActivityTimeout: 60000,
    browserDisconnectTolerance: 3,

    // settings for webpack dev middleware
    webpackMiddleware: {
      // Disable build stats
      stats: 'errors-only',
      logLevel: 'warn',
    },
  });
};

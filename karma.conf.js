module.exports = function(config) {
    config.set({

    plugins: [
        'karma-browserify',
        'karma-mocha',
        'karma-sinon-chai',
        "karma-mocha-reporter",
        'karma-phantomjs-launcher'
      ],
  
      frameworks: ['mocha', 'sinon-chai', 'browserify'],

      preprocessors: {
        'js/**/*.js': ['browserify'],
        'test/**/*.js': ['browserify']
      },

      reporters: ['mocha'],

      files: ['test/*.test.js'],

      browsers: ['PhantomJS'],

      browserify: {
        debug: false,
        transform: [
          ['babelify', {
            presets: ['@babel/preset-env'],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }]
        ],
        extensions: ['.js'],
        plugin: []
      },
    });
  };
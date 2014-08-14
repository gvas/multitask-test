module.exports = function (grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          base: '',
          port: 9999
        }
      }
    },
    'saucelabs-qunit': {
      options: {
        username: process.env.SAUCE_USERNAME,
        key: process.env.SAUCE_ACCESS_KEY,
        browsers: [{
          browserName: 'firefox',
          version: '19',
          platform: 'XP'
        }]
      },
      unit: {
        options: {
          testname: "Unit tests",
          urls: ['http://localhost:9999/tests/unit.html']
        }
      },
      integration: {
        options: {
          testname: "Integration tests",
          urls: ['http://localhost:9999/tests/integration.html']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-saucelabs');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect', 'saucelabs-qunit']);
};
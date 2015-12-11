module.exports = function (grunt) {
  'use strict';

  var pkg = grunt.config.get('pkg'),
  config = grunt.config.get('config');

  grunt.config.merge({
    ngconstant: {
      // Options for all targets
      options: {
        space: '  ',
        wrap: '"use strict";\n\n {%= __ngModule %}',
        name: 'config',
      },
      // Environment targets
      local: {
        options: {
          dest: 'app/config.js'
        },
        constants: {
          ENV: {
            name: 'local',
            apiEndpoint: 'http://api.<%= pkg.name %>.com:1337/'
          }
        }
      },
      development: {
        options: {
          dest: 'app/config.js'
        },
        constants: {
          ENV: {
            name: 'development',
            apiEndpoint: 'http://api.<%= pkg.name %>.com/'
          }
        }
      },
      production: {
        options: {
          dest: 'app/config.js'
        },
        constants: {
          ENV: {
            name: 'production',
            apiEndpoint: 'http://localhost:1337/'
          }
        }
      }
    }
  });
};
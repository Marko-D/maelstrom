module.exports = function (grunt) {
	'use strict';

	var config = grunt.config.get('config');
	var serveStatic = require('serve-static');

	grunt.config.merge({
		connect: {
			server: {
				options: {
					protocol: 'http',
					port: 8080,
					hostname: 'localhost',
					base: 'dist',
					livereload: true,
					open: {
						target: 'http://localhost:8080/'
					}
				}
			},
			dev: {
				options: {
					protocol: 'http',
					port: 80,
					hostname: 'localhost',
					base: 'app',
					livereload: true,
					open: {
						target: 'http://ui.<%= pkg.name %>.com/'
					},
					middleware : function(connect) {
						var mw = [];
						mw.push(connect().use('/bower_components', serveStatic('./bower_components')));
						mw.push(serveStatic('./app'));
						mw.push(connect().use('/css', serveStatic('./dist/assets/css')));
						mw.push(serveStatic('./app'));

						return mw;
					}
				}
			}
		}
	});
};
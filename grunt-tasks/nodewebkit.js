module.exports = function (grunt) {
	'use strict';

	var pkg = grunt.config.get('pkg'),
	config = grunt.config.get('config');

	grunt.config.merge({
		nwjs: {
			options: {
				platforms: ['win32'],
				version: 'v0.12.3',
				buildDir: './.webkitbuilds',
				appName: '<%= pkg.name %>'
			},
			src: ['<%= config.dist %>/**/*']
		}
	});
};
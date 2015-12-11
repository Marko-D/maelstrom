module.exports = function (grunt) {
	'use strict';
	
	var pkg = grunt.config.get('pkg'),
	config = grunt.config.get('config');

	grunt.config.merge({
		uglify: {
			dist: {
				files: {
					'<%= config.dist %>/js/<%= pkg.name %>.min.js': [
					'<%= config.dist %>/js/<%= pkg.name %>.js'
					]
				}
			}
		}
	});
};
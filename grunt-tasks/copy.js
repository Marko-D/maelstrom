module.exports = function (grunt) {
	'use strict';

	var pkg = grunt.config.get('pkg'),
	config = grunt.config.get('config'),
	scripts = grunt.config.get('scripts');

	grunt.config.merge({
		copy: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= config.appPath %>',
					src: [
						'**/*.html',
						'*.html',
						'*.json',
						'node_modules/**/*'
					], 
					dest: '<%= config.dist %>'
				}]
			},
			styles: {
				files: [{
					expand: true,
					cwd: '<%= config.assets %>/sass',
					src: [
						'**/*.css'
					], 
					dest: '<%= config.temp %>/assets/css'
				}]
			},
			concat: {
				files: [{
					expand: true,
					cwd: '.tmp/concat/assets',
					src: [
						'js/**/*.js'
					], 
					dest: '<%= config.dist %>/assets'
				}]
			}
		}
	});
};
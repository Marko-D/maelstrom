module.exports = function (grunt) {
	'use strict';

	var pkg = grunt.config.get('pkg'),
	config = grunt.config.get('config');

	grunt.config.merge({
		watch: {
			scripts: {
				files: ['app/**/*.js'],
				tasks: ['minify']
			},
			styles: {
				files: ['app/**/**/*.scss', 'app/**/**/*.css', '!app/css/**/*.css'],
				tasks: ['copy:styles', 'sass', 'postcss']
			},
			html: {
				files: ['app/**/*.html'],
				tasks: ['copy:dist', 'usemin']
			},
			livereload: {
				options: { 
					livereload: true
				},
				files: [
					'<%= config.dist %>/**/*.js',
					'<%= config.dist %>/**/*.css',
					'<%= config.dist %>/**/*.html'
				]
			}
		}
	});
};
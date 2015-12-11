module.exports = function (grunt) {
	'use strict';

	var pkg = grunt.config.get('pkg'),
	config = grunt.config.get('config'),
	scripts = grunt.config.get('scripts');

	grunt.config.merge({
		useminPrepare: {
			html: "<%= config.appPath %>/index.html",
			options: {
				dest: "<%= config.dist %>"
			}
		},
		usemin: {
			html: '<%= config.dist %>/index.html'
		}
	});
};
module.exports = function (grunt) {
	'use strict';

	var pkg = grunt.config.get('pkg'),
	config = grunt.config.get('config'),
	scripts = grunt.config.get('scripts');

	grunt.config.merge({
		ng_template: {
			files : ['app/**/views'],
			options: {
				appDir : 'app',
				indexFile : 'index.html',
				concat : true
			}
		}
	});
};
module.exports = function (grunt) {
	'use strict';

	var pkg = grunt.config.get('pkg');

	grunt.config.merge({
		localhosts: {
			set : {
				options: {
					rules: [{
						ip: '127.0.0.1',
						hostname: 'ui.<%= pkg.name %>.com',
						type: 'set'
					}, {
						ip: '192.168.55.55',
						hostname: 'api.<%= pkg.name %>.com',
						type: 'set'
					}]
				}
			},
			remove : {
				options: {
					rules: [{
						ip: '127.0.0.1',
						hostname: 'ui.<%= pkg.name %>.com',
						type: 'remove'
					}, {
						ip: '127.0.0.1',
						hostname: 'api.<%= pkg.name %>.com',
						type: 'remove'
					}]
				}
			}
		}
	});
};
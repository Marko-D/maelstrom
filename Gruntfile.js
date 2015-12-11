/*global module:false*/
module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

	var config = grunt.file.readJSON('config.json'),
	pkg = grunt.file.readJSON('package.json');

	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg: pkg,
		config: config,
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
		'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
		'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
		'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
		' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
	});

	grunt.loadTasks('./grunt-tasks');

	// Default task.
	grunt.registerTask('default', [
		'clean',
		'copy:dist',
		'copy:styles',
		'useminPrepare',
		'sass:dev',
		'sass',
		'postcss',
		'ngconstant:local',
		'concat:generated',
		'ngAnnotate',
		'uglify:generated',
		'usemin',
		'localhosts:set',
		'connect:dev',
		'watch'
	]);

	grunt.registerTask('local', [
		'clean',
		'copy:dist',
		'copy:styles',
		'sass',
		'postcss',
		'ngconstant:development',
		'connect:local',
		'watch'
	]);
	grunt.registerTask('minify', [
		'useminPrepare',
		'copy',
		'concat:generated',
		'uglify:generated',
		'usemin',
	]);
};

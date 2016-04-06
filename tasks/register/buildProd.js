module.exports = function (grunt) {
	grunt.registerTask('buildProd', [
		'compileAssets',
		'linkAssetsBuild',
		'clean:build',
		'copy:build'
	]);
};

var gulp = require('gulp');
var initGulpTasks = require('react-component-gulp-tasks');

var taskConfig = {

	component: {
		name: 'ImageMapper',
		dependencies: [
			'classnames',
			'react',
			'react-dom'
		],
		lib: 'lib'
	},

	example: {
		src: 'example/src',
		dist: 'example/dist',
		files: [
			Index files here:,
			'.gitignore'
		],
		scripts: [
			JS files here:
		],
		less: [
			'example.less'
		]
	}

};

initGulpTasks(gulp, taskConfig);

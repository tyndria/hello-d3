const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('watch:js', () => gulp.watch(['./src/main.js']));

gulp.task('browserSync', () => browserSync.init({
	server: './',
	index: 'index.html',
	port: 3030,
	files: ['index.html', './src/main.js']
}));

gulp.task('watch', ['watch:js', 'browserSync']);
'use strict';

// Include gulp
var gulp = require('gulp'),
	//Include plugins
	uglify = require('gulp-uglify'),
	debug = require('gulp-debug'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	mainBowerFiles = require('main-bower-files'),
	plugins = require("gulp-load-plugins")({
		pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
		replaceString: /\bgulp[\-.]/
	}),
	sourcemaps = require('gulp-sourcemaps'),
	connect = require('gulp-connect'),
	karma = require("gulp-karma"),
	handlebars = require("gulp-handlebars"),
	defineModule = require('gulp-define-module');

// Concatenate JS Files
gulp.task('scripts', function () {
    gulp.src("public/src/js/*.js")
        .pipe(uglify({
            output: {
                beautify: false
            },
            outSourceMap: true,
            sourceRoot: '/'
        }))
        .pipe(gulp.dest('public/build/js'));
});

gulp.task('sass', function() {
    gulp.src('public/src/css/**/**.*css')
    	.pipe(sourcemaps.init())
    	.pipe(sass({
        	includePaths: ['bower_components/foundation/scss/'],
        	debug_info: true
        }).on('error', sass.logError))
        .pipe(sourcemaps.write())
    	.pipe(concat('main.min.css'))
        .pipe(gulp.dest('public/build/css'));
	
});



//gulp.task('bower', function() {
//	  gulp.src( mainBowerFiles())
//	  	.pipe(plugins.filter('*.js'))
//		.pipe(plugins.concat('vendor.js'))
//		.pipe(plugins.uglify())
//	    .pipe(gulp.dest('public/build/js/vendor/'));
//});

gulp.task('karma', function() {
	gulp.src(['public/src/js/*.js'])
	.pipe(karma({
		configFile: 'karma.conf.js',
		action: 'watch'
	}));
});

gulp.task('handlebars', function() {
	gulp.src(["hbs/**/*.hbs"])
	.pipe(handlebars({
      handlebars: require('handlebars')
    }))
	.pipe(defineModule("amd"))
	.pipe(gulp.dest('public/src/js/hbs/'));
});

// Default Task
gulp.task('default', ['scripts', 'sass', /*'bower',*/ 'handlebars']);
gulp.task('prod', ['scripts', 'sass']);

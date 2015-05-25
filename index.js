var gulp         = require('gulp');
var rename       = require('gulp-rename');
var uglify       = require('gulp-uglify');
var gulpFilter   = require('gulp-filter');
var elixir       = require('laravel-elixir');
var utilities    = require('laravel-elixir/ingredients/commands/Utilities');
var Notification = require('laravel-elixir/ingredients/commands/Notification');

elixir.extend('uglify', function(src, output, options){

	var config  = this;

	var baseDir = config.jsOutput;

	var filter = gulpFilter(['**/*', '!**/*.min.js']);

	src = utilities.buildGulpSrc(src, baseDir, '**/*.js');

	gulp.task('uglify', function() {

		var onError = function(err) {

			new Notification().error(err, 'Error on line : <%= error.lineNumber %>\n');

            this.emit('end');

        };

        return gulp.src(src)
        	.pipe(filter)
            .pipe(uglify()).on('error', onError)
            .pipe(rename({
	            extname: '.min.js'
	        }))
            .pipe(gulp.dest(output || config.jsOutput))
            .pipe(new Notification().message('Uglified!'));

	});

	return this.queueTask('uglify');
});
const gulp = require('gulp');
const Elixir = require('laravel-elixir');

const $ = Elixir.Plugins;
const config = Elixir.config;

/**
 * Prep the Gulp src and output paths.
 *
 * @param  {string|Array} src
 * @param  {string|null}  output
 * @return {GulpPaths}
 */
function prepGulpPaths(src, output) {
  return new Elixir.GulpPaths()
    .src(src, config.get('public.js.folder'))
    .output(output || config.get('public.js.outputFolder'));
}

Elixir.extend('uglify', (src, output, options = {}) => {
  const paths = prepGulpPaths(src || ['**/*.js', '!**/*.min.js'], output);
  new Elixir.Task('uglify', () => {
    (
      gulp.src(paths.src.path)
        .pipe($.if(config.sourcemaps, $.sourcemaps.init()))
        .pipe($.uglify(options))
        .on('error', function (err) { // eslint-disable-line func-names
          // TODO: Have no idea to use "this" in arrow function
          new Elixir.Notification().error(err, 'Error on line : <%= error.lineNumber %>\n');
          this.emit('end');
        })
        .pipe($.if(options.suffix !== false, $.rename({ extname: options.suffix || '.min.js' })))
        .pipe($.if(config.sourcemaps, $.sourcemaps.write('.')))
        .pipe(gulp.dest(paths.output.baseDir))
        .pipe(new Elixir.Notification('Uglified!'))
    );
  }).watch(paths.src.paths);
});

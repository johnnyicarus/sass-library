import browserSync from 'browser-sync';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

gulp.task('styles', () => {
  return gulp.src('src/main.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('dist/'))
});

gulp.task('serve', () => {
  browserSync({
    notify: false,
    port: 3000,
    server: {
      baseDir: ['dist']
    }
  });
});

gulp.task('default', ['styles', 'serve']);

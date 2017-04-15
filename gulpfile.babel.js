import gulp from 'gulp';

// Import tasks
import clean from './gulp-tasks/clean';
import copy from './gulp-tasks/copy';
import fonts from './gulp-tasks/fonts';
import deploy from './gulp-tasks/deploy';
import server from './gulp-tasks/server';
import linter from './gulp-tasks/linter';
import styles from './gulp-tasks/styles';
import scripts from './gulp-tasks/scripts';
import media from './gulp-tasks/media';
import svgSprite from './gulp-tasks/svg-sprite';
import pages from './gulp-tasks/pages';
import watch from './gulp-tasks/watch';

// Instantiate tasks
gulp.task('clean', clean);
gulp.task('copy', copy);
gulp.task('fonts', fonts);
gulp.task('deploy', deploy);
gulp.task('server', server);
gulp.task('linter', linter);
gulp.task('styles', ['svg-sprite', 'media', 'linter'], styles);
gulp.task('scripts', scripts);
gulp.task('media', media);
gulp.task('svg-sprite', svgSprite);
gulp.task('pages', ['svg-sprite'], pages);
gulp.task('watch', ['server'], watch);

// Bundled Tasks
gulp.task('default', [
  'svg-sprite',
  'scripts',
  'linter',
  'media',
  'styles',
  'fonts',
  'copy',
  'pages'
]);
import gulp from 'gulp'
import gulpBabel from 'gulp-babel'

const build = () =>
gulp.src(['src/**/*.js'], {base: 'src'})
.pipe(gulpBabel())
.pipe(gulp.dest('.'))

gulp.task('build', build)

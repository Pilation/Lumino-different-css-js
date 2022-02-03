import gulp from 'gulp';
import purgecss from 'gulp-purgecss';
export const purge = () => {
    // return gulp.src(app.path.src.css)
    //     .pipe(purgecss({
    //         content: [app.path.src.html]
    //     }))
    //     .pipe(gulp.dest(app.path.build.css))

    return gulp.src('src/**/*.css')
        .pipe(purgecss({
            content: ['src/**/*.html']
        }))
        .pipe(gulp.dest('build/css'))

}

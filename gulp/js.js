module.exports = function (paths, gulp, gulpModules, environment) {
    return function() {
        return gulp.src(paths.jsDir + '/**/*.js')
            .pipe(environment.production ? gulpModules.uglify() : gulpModules.gutil.noop())
            .pipe(environment.production ? gulpModules.rename({extname: '.min.js'}) : gulpModules.gutil.noop())
            .pipe(gulp.dest(paths.buildDir + '/' + paths.jsDir));
    };
};

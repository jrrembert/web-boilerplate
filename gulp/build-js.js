module.exports = function (paths, gulp, gulpModules, environment) {
    return function() {
        return gulp.src(paths.jsDir + '/**/*.js')
            .pipe(gulpModules.concat('boilerplate.js'))
            .pipe(environment.production ? gulpModules.uglify() : gulpModules.gutil.noop())
            .on('error', gulpModules.notify.onError("Error: <%= error.message %>"))
            .pipe(environment.production ? gulpModules.rename({extname: '.min.js'}) : gulpModules.gutil.noop())
            .pipe(gulp.dest(paths.buildDir + '/' + paths.jsDir))
            .pipe(gulpModules.notify({ message: 'JS build task finished.', onLast: true}));
    };
};

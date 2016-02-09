module.exports = function (paths, gulp, gulpModules, environment) {
    return function() {

        var replace = {
            'js': paths.devDir + '/' + paths.jsDir + '/boilerplate.min.js',
            'css': paths.devDir + '/' + paths.cssDir + '/boilerplate.min.css'
        };

        return gulp.src(paths.devDir + '/index.html')
            .pipe(environment.production ? gulpModules.htmlreplace(replace) : gulpModules.gutil.noop())
            .on('error', gulpModules.notify.onError("Error: <%= error.message %>"))
            .pipe(gulp.dest(paths.buildDir))
            .pipe(gulpModules.notify({ message: 'HTML build task finished.', onLast: true}));
    };
};

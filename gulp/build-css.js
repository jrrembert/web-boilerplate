module.exports = function (paths, gulp, gulpModules, environment) {
    return function() {
        return gulp.src('css/**/*.css')
            .pipe(gulpModules.autoprefixer({browsers: ['last 2 versions', '> 5%'], cascade: false}))
            .on('error', gulpModules.notify.onError("Error: <%= error.message %>"))
            .pipe(gulpModules.notify({ message: 'Autoprefixing finished.', onLast: true}))
            .pipe(environment.production ? gulpModules.cssnano() : gulpModules.gutil.noop())
            .on('error', gulpModules.notify.onError("Error: <%= error.message %>"))
            .pipe(environment.production ? gulpModules.rename({extname: '.min.css'}) : gulpModules.gutil.noop())
            .pipe(gulp.dest(paths.buildDir + '/' + paths.cssDir))
            .pipe(gulpModules.notify({ message: 'CSS build task finished.', onLast: true}));
    };
};

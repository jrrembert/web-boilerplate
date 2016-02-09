module.exports = function(paths, gulp, gulpModules, environment) {
    return function() {
        if (environment.dev) {
            gulpModules.browsersync.init({
                server: './'
            });
        } else {
            gulpModules.browsersync.init({
                server: './build/'
            });
        }
        gulp.watch(paths.jsDir + '/**/*.js', ['build-js']);
        gulp.watch(paths.cssDir + '/**/*.css', ['build-css']);
        gulp.watch('./index.html', ['build-html']);
    };
};

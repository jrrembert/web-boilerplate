module.exports = function(paths, gulp, gulpModules, environment) {
    return function() {
        if (environment.dev) {
            gulpModules.browsersync.init({
                server: paths.devDir
            });
        } else {
            gulpModules.browsersync.init({
                server: paths.buildDir
            });
        }
        gulp.watch(paths.devDir + '/' + paths.jsDir, ['build-js']);
        gulp.watch(paths.devDir + '/' + paths.cssDir, ['build-css']);
        gulp.watch(paths.devDir + '/index.html', ['build-html']);
    };
};

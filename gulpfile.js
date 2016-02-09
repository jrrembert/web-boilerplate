// ==========================================
//          Gulpfile boilerplate.
//
// Author:  J. Ryan Rembert
// Website: https://github.com/jrrembert
// Gulp:    http://gulpjs.com/
// ==========================================

// ==========================================
// Dependencies
// ==========================================

var gulp = require('gulp-help')(require('gulp'), {
    description: 'Help menu.'
});

var gulpModules = {
    autoprefixer: require('gulp-autoprefixer'), // Add browser-specific prefixes to CSS
    browsersync: require('browser-sync'),       // Sync and reload browser on file changes.
    concat: require('gulp-concat'),             // Concat files
    cssnano: require('gulp-cssnano'),           // PostCSS-based minifier for CSS
    del: require('del'),                        // Delete files
    htmlreplace: require('gulp-html-replace'),  // Replace links to non-minified CSS and JS
    livereload: require('gulp-livereload'),     // Refresh browser on file change
    notify: require('gulp-notify'),             // Desktop notifications
    rename: require('gulp-rename'),             // Rename files
    sourcemaps: require('gulp-sourcemaps'),     // Unwrap minified files for debugging
    uglify: require('gulp-uglify'),             // Minify files to improve performance
    gutil: require('gulp-util')                 // Utilities for Gulp plugins

};

// ==========================================
// Project paths - tweak vars as needed
// ==========================================

var paths = {
    buildDir: './build',
    cssDir: './css',
    jsDir: './js'
};

// ==========================================
// Environmental vars
// ==========================================

var environment = {
    development: gulpModules.gutil.env.dev,
    production: gulpModules.gutil.env.production
};

// ==========================================
// Gulp tasks
// ==========================================

gulp.task('clean', 'Delete build directory.', function(callback) {
    gulpModules.del([paths.buildDir], callback);
});

gulp.task('build-js',
          'Concat JS',
          require('./gulp/build-js')(paths, gulp, gulpModules, environment), {
              options: {
                  'production': 'Minify and rename JS'
              }
          });
gulp.task('build-css',
          'Add browser-specific prefixes to CSS',
          require('./gulp/build-css')(paths, gulp, gulpModules, environment), {
              options: {
                  'production': 'Minify and rename CSS'
              }
          });
gulp.task('build-html',
          'Build HTML',
          require('./gulp/build-html')(paths, gulp, gulpModules, environment), {
              options: {
                  'production': 'Replace JS/CSS references with minified filenames.'
              }
          });
gulp.task('serve',
          'Starts static web server, monitors file changes in your root and reloads browser',
          require('./gulp/serve')(paths, gulp, gulpModules, environment), {
              options: {
                  'production': 'Serve files from build directory'
              }
          });
gulp.task('default',
          'Run all build tasks and start static file server',
          ['serve', 'build-html', 'build-js', 'build-css'],
          function() { return; }, {
              options: {
                  'production': 'Run all scripts with `production` flag'
              }
          });

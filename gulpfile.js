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

var gulp = require('gulp');
var gulpModules = {
    autoprefixer: require('gulp-autoprefixer'), // Add browser-specific prefixes to CSS
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

require('gulp-help')(gulp, {
    description: 'Help menu.'
});

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

gulp.task('build-js', 'Minify JS', require('./gulp/build-js')(paths, gulp, gulpModules, environment));
gulp.task('build-css', 'Minify CSS', require('./gulp/build-css')(paths, gulp, gulpModules, environment));
gulp.task('build-html', 'Build HTML and use minified JS and CSS.', require('./gulp/build-html')(paths, gulp, gulpModules, environment));

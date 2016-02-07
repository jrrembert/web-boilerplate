// ==========================================
// Boilerplate Gulpfile.
//
// Author: J. Ryan Rembert
// Website: https://github.com/jrrembert
//
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
    livereload: require('gulp-livereload'),     // Refresh browser on file change
    notify: require('gulp-notify'),             // Print message to console when task finishes
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

gulp.task('build-js', 'Minify JS', require('./gulp/js')(paths, gulp, gulpModules, environment));



//
// gulp.task('minify-js', 'Concat, uglify, and generate sourcemaps for Javascript files.', ['clean-js'], function() {
//     return gulp.src(inputPaths.javascript)
//         .pipe(concat(minifiedJsFileName))
//         .on('error', notify.onError("Error: <%= error.message %>"))
//         .pipe(uglify())
//         .on('error', notify.onError("Error: <%= error.message %>"))
//         .pipe(rename({
//             extname: '.min.js'
//         }))
//         .pipe(notify({ message: "Javascript appropriately uglified."}))
//         .pipe(gulp.dest(outputPaths.javascript));
// });
//
// gulp.task('postprocess-css', 'Adds vendor-specific prefixes to CSS files.', ['clean-css'], function() {
//     return gulp.src(inputPaths.css)
//         .pipe(autoprefixer({browsers: ['last 2 versions', '> 5%'], cascade: false}))
//         .pipe(gulp.dest(outputPaths.css))
//         .pipe(notify({ message: 'Autoprefixer finished.', onLast: true}));
// });
//
// gulp.task('clean-js', 'Delete existing compiled Javascript files.', function(callback) {
//     del([outputPaths.javascript + '/**/*.min.js'], callback);
// });
//
// gulp.task('clean-css', 'Delete existing compiled CSS files.', function(callback) {
//     del([outputPaths.css + '/*.css', 'src/css/map/*.map'], callback);
// });
//
// gulp.task('watch', 'Watch directories for changes and recompile files accordingly.', function() {
//     gulp.watch(inputPaths.javascript, function(event) {
//         gulp.start(['minify-js']);
//     });
//
//     gulp.watch(inputPaths.css, function(event) {
//         gulp.start(['postprocess-css']);
//     });
// });
//
// gulp.task('default', ['minify-js', 'postprocess-css']);









//
// gulp.task('default', ['clean'], function() {
//     return gulp.start(['minify-js']);
// });

// Create Gulp tasks


// gulp.task('styles', function() {
// 	return gulp.src(['scss/**/*.scss'])
// 		.pipe(sass({sourceMap: true, style: 'compact'}))
// 		.pipe(notify({ message: 'Sass pre-processing finished.', onLast: true}))
// 		.pipe(sourcemaps.init({loadMaps: true}))
// 		.pipe(autoprefixer({browsers: ['last 2 versions', '> 5%'], cascade: false}))
// 		.pipe(notify({ message: 'Autoprefixer post-processing finished.', onLast: true}))
// 		.pipe(gulp.dest('css'))
// 		.pipe(notify({ message: 'Styles task complete!', onLast: true}));
// });
//
// gulp.task('clean', function(callback) {
// 	del(['css/**/*.css'], callback);
// });

// Generally it's advised to execute tasks in the dependency
// array rather than gulp.start but we want 'clean' to finish
// before executing any other tasks.
//
// gulp.task('default', ['clean'], function() {
// 	return gulp.start(['styles']);
// });

// Watch files for changes
//
// gulp.task('watch', function() {
// 	gulp.watch(['scss/**/*.scss'], ['styles', 'clean']);
//
// 	// Create LiveReload server
// 	livereload.listen();
//
// 	// Watch any files in dist/ and reload on change
// 	gulp.watch(['css/**/*.css']).on('change', livereload.changed);
//
// });

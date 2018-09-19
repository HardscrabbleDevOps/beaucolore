// get the dependencies
var gulp = require('gulp');
var jetpack = require('fs-jetpack');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var htmlmin = require('gulp-htmlmin');


var projectDir = jetpack;
var srcDir = projectDir.cwd('./');
var buildDir = projectDir.cwd('./build');
var destDir = projectDir.cwd('./build/app');
var distDir = projectDir.cwd('./dist');
var distAppDir = projectDir.cwd('./dist/app');

gulp.task('clean',['empty'], function(callback) {
    return buildDir.dirAsync('.', { empty: true });
});
gulp.task('empty', function(callback) {
    return distDir.dirAsync('.', { empty: true });
});
gulp.task('copy', ['clean'], function() {
    return projectDir.copyAsync('.', buildDir.path(), {
        overwrite: true,
        matching: [
            // './node_modules/**/*',
            './index.html',
            './manifest.json',
            './services.html',
            './portfolio.html',
            './contact.html',
            './about.html',
            './app/**/*'
        ]
    });
});

gulp.task('build', ['copy'], function() {
    return gulp.src('./index.html')
        .pipe(usemin({
            jsAttributes : {
              async : false
            },
            js: [uglify()]
        }))
        .pipe(gulp.dest('build/'));
});
gulp.task('build-portfolio', ['build'], function() {
    return gulp.src('./portfolio.html')
        .pipe(usemin({
            jsAttributes : {
              async : false
            },
            js: [uglify()]
        }))
        .pipe(gulp.dest('build/'));
});
gulp.task('build-about', ['build-portfolio'], function() {
    return gulp.src('./about.html')
        .pipe(usemin({
            jsAttributes : {
              async : false
            },
            js: [uglify()]
        }))
        .pipe(gulp.dest('build/'));
});
gulp.task('build-contact', ['build-about'], function() {
    return gulp.src('./contact.html')
        .pipe(usemin({
            jsAttributes : {
              async : false
            },
            js: [uglify()]
        }))
        .pipe(gulp.dest('build/'));
});
gulp.task('build-services', ['build-contact'], function() {
    return gulp.src('./services.html')
        .pipe(usemin({
            jsAttributes : {
              async : false
            },
            js: [uglify()]
        }))
        .pipe(gulp.dest('build/'));
});
gulp.task('uglify', ['build-services'], function() {
  return gulp.src('./build/app/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/app/'))

});
gulp.task('minify', ['uglify'], function() {
  return gulp.src('./build/app/app.css')
    .pipe(minify())
    .pipe(gulp.dest('./build/app/css/'))
});
gulp.task('minify2', ['minify'], function() {
  return gulp.src('./build/app/minor.css')
    .pipe(minify())
    .pipe(gulp.dest('./build/app/css/'))
});
gulp.task('htmlminify', ['minify2'], function() {
  return gulp.src('./build/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./build'));
});
gulp.task('default', ['htmlminify' ], function() {
    // return projectDir.copyAsync('build', distAppDir.path(), {
    //     overwrite: true,
    //     matching: [
    //         'app/css/fonts/*'
    //     ]
    // });
});

gulp.task('prep-dist', ['default'],function(callback) {
    return distDir.dirAsync('.', { empty: true });
});
gulp.task('dist', ['prep-dist'], function() {
    return projectDir.copyAsync('build', distDir.path(), {
        overwrite: true,
        // TODO: make sure all the built css files are included.
        matching: [
            'app/app.js',
            'app/css/minor.css',
            'app/css/app-*.css',
            'app/css/minor-*.css',
            'app/app-*.js',
            'app/js/masonry.pkgd.min.js',
            'app/js/index.js',
            'index.html',
            'manifest.json',
            'services.html',
            'portfolio.html',
            'contact.html',
            'about.html',
            'index.html',
            'app/templates/*',
            'app/webfonts/*',
            'app/css/fonts/*',
            'app/css/fonts/**/*',
            'app/img/*'
        ]
    });
});

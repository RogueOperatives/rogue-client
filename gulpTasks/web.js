(function () {
    'use strict';

    function RegisterTasks(gulp, config) {

        var batch = require('gulp-batch'),
            cleanCss = require('gulp-clean-css'),
            inject = require('gulp-inject'),
            path = require('path'),
            rename = require('gulp-rename'),
            runSequence = require('run-sequence'),
            server = require('gulp-server-livereload'),
            sourcemaps = require('gulp-sourcemaps'),
            ts = require('gulp-typescript'),
            tsConfig = ts.createProject(config.ts.config),
            watch = require('gulp-watch');

        gulp.task('[private-web]:copy-template', function () {
            var sources = gulp.src(config.source.files.injectables);

            return gulp.src(config.source.files.main)
                .pipe(inject(sources, { addRootSlash: false, ignorePath: 'dist/www' }))
                .pipe(gulp.dest(path.join(config.targets.buildFolder)));
        });

        gulp.task('[private-web]:copy-angular2-scripts', function () {
            return gulp.src(config.source.files.angular2)
                .pipe(gulp.dest(path.join(config.targets.buildFolder, '@angular')));
        });

        gulp.task('[private-web]:copy-rxjs-scripts', function () {
            return gulp.src(config.source.files.rxjs)
                .pipe(gulp.dest(path.join(config.targets.buildFolder, 'rxjs')));
        });

        gulp.task('[private-web]:copy-ui-frameworks-js', function () {
            return gulp.src(config.source.files.uiFramework.js)
                .pipe(gulp.dest(path.join(config.targets.buildFolder, 'scripts/')));
        });

        gulp.task('[private-web]:copy-ui-frameworks-css', function () {
            return gulp.src(config.source.files.uiFramework.css)
                .pipe(gulp.dest(path.join(config.targets.buildFolder, 'css/')));
        });

        gulp.task('[private-web]:copy-ui-frameworks-fonts', function () {
            return gulp.src(config.source.files.uiFramework.fonts)
                .pipe(gulp.dest(path.join(config.targets.buildFolder, 'fonts/')));
        });

        gulp.task('[private-web]:copy-system-setup-script', function () {
            return gulp.src(config.source.files.systemSetupScript)
                .pipe(gulp.dest(path.join(config.targets.buildFolder, 'scripts/')));
        });

        gulp.task('[private-web]:copy-system', function () {
            return gulp.src(config.source.files.systemJs)
                .pipe(rename(config.targets.systemMinJs))
                .pipe(gulp.dest(path.join(config.targets.buildFolder, 'scripts/')))
        });

        gulp.task('[private-web]:build-app-scripts', function () {
            return gulp.src(config.source.files.app.ts)
                .pipe(sourcemaps.init())
                .pipe(ts(tsConfig))
                .pipe(sourcemaps.write('.'))
                .pipe(gulp.dest(path.join(config.targets.buildFolder, config.targets.appFolder)));
        });

        gulp.task('[private-web]:copy-app-html', function () {
            return gulp.src(config.source.files.app.html)
                .pipe(gulp.dest(path.join(config.targets.buildFolder, config.targets.appFolder)));
        });
        
        gulp.task('[private-web]:copy-app-styles', function () {
            return gulp.src(config.source.files.app.css)
                .pipe(cleanCss())
                .pipe(gulp.dest(path.join(config.targets.buildFolder, config.targets.stylesFolder)));
        });

        gulp.task('[private-web]:copy-component-styles', function () {
            return gulp.src(config.source.files.app.componentCss)
                .pipe(cleanCss())
                .pipe(gulp.dest(path.join(config.targets.buildFolder, config.targets.appFolder)));
        });

        gulp.task('build-web', function (done) {
            return runSequence(
                'clean',
                [
                    '[private-web]:copy-angular2-scripts',
                    '[private-web]:copy-rxjs-scripts',
                    '[private-web]:copy-ui-frameworks-js',
                    '[private-web]:copy-ui-frameworks-css',
                    '[private-web]:copy-ui-frameworks-fonts',
                    '[private-web]:copy-system-setup-script',
                    '[private-web]:copy-system',
                    '[private-web]:build-app-scripts',
                    '[private-web]:copy-app-html',
                    '[private-web]:copy-app-styles',
                    '[private-web]:copy-component-styles'
                ],
                '[private-web]:copy-template',
                done
            );
        });

        gulp.task('[private-web]:start-live-server', ['build-web'], function () {
            return gulp.src(config.targets.buildFolder)
                .pipe(server({
                    livereload: true,
                    open: true
                }));
        });

        gulp.task('watch-web', ['[private-web]:start-live-server'], function () {
            deltaWatch();
        });

        function deltaWatch() {
            return watch(config.source.files.app.everything, batch(function (events, done) {
                console.log(arguments);

                runSequence(
                    '[private-web]:copy-system-setup-script',
                    '[private-web]:copy-app-html',
                    '[private-web]:build-app-scripts',
                    done);
            }));
        }
    }

    module.exports = {
        init: RegisterTasks
    };
})();

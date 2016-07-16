'use strict';

module.exports = {
    systemJsConfig: './system.config.js',
    source: {
        folder: './src/',
        files: {
            injectables: [
                './dist/www/scripts/system.min.js',
                './dist/www/scripts/system.setup.js',
                './dist/www/css/app.css',
                './dist/www/scripts/shim.min.js',
                './dist/www/scripts/zone.js',
                './dist/www/scripts/reflect.js'
            ],
            main: [
                './src/index.html'
            ],
            systemSetupScript: './src/system.setup.js',
            app: {
                everything: ['./src/app/**/*', './src/system.setup.js'],
                ts: [
                    './src/app/**/*.ts'
                ],
                html: [
                    './src/app/**/*.html'
                ],
                css: [

                    './src/css/**/*.css'
                ],
                componentCss: [
                    './src/app/**/*.css'
                ],
                assets: [
                    './src/assets/**/*.*'
                ]
            },
            shim: [
                './node_modules/es6-shim/es6-shim.min.js',
                './node_modules/angular2/es6/dev/src/testing/shims_for_IE.js'
            ],
            angular2rc1deps: [
                './node_modules/core-js/client/shim.min.js',
                './node_modules/zone.js/dist/zone.js',
                './node_modules/reflect-metadata/reflect.js'
            ],
            angular2: './node_modules/@angular/**/*.js',
            rxjs: './node_modules/rxjs/**/*.js',
            systemJs: './node_modules/systemjs/dist/system.src.js'
        }
    },
    ts: {
        config: './tsconfig.json'
    },
    targets: {
        systemMinJs: 'system.min.js',
        appFolder: 'app',
        buildFolder: './dist/www',
        stylesFolder: 'css',
        minified: {
            js: 'app.js',
            css: 'app.css',
            templateCache: 'ng-templates.js'
        }
    }
};

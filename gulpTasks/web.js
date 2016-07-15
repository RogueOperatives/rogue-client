(function () {
    'use strict';

    function RegisterTasks(gulp, config) {

        gulp.task('[private-web]:')
        
        gulp.task('build-web', function (done) {
            return runSequence(
                'clean',
                [
                    '[private-web]:'
                ],
                '[private-web]:copy-template',
                done
            );
        });
    }

    module.exports = {
        init: RegisterTasks
    };
})();

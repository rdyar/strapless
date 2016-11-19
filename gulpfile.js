var gulp        = require('gulp');
var browserSync = require('browser-sync');
var cp          = require('child_process');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 * notice the two config files - the second one over rides the baseurl in the main one so that you can work locally without changing it.
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll.bat', ['build','--config','_config.yml,_configlocal.yml'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload when watched files change
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */

gulp.task('serve', ['jekyll-build'], function() {
    browserSync.init({
        server: "_site/"
    });
});

/**
 * Watch all files for changes, except the _site and other unneccessary folders
 */
gulp.task('watch', function () {
    gulp.watch(['**/*.*', '!_site/**/*', '!node_modules/**/*','!.sass-cache/**/*' ], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will 
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['serve', 'watch']);
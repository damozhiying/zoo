'use strict';
var gulp    = require('gulp'),
    del     = require('del');

gulp.task('clean', function(done) {
    del(['src/main/resources/static', 'src/main/resources/templates'], done)
});
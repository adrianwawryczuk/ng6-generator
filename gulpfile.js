const gulp = require('gulp');
const createComponent = require("./generators/component");

gulp.task('component', createComponent);
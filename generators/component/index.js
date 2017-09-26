const gulp = require('gulp');
const replace = require('gulp-replace');
const rename = require('gulp-rename');
const utils = require("../utils");

module.exports = function createComponent(cb, componentName = '', distPath = __dirname, templatePath = `${__dirname}`) {
    const {camelCase, kebabCase} = utils.getNames(componentName);

    console.log(templatePath, distPath, componentName);

    gulp.src([`${templatePath}/**/*`, '!index.js'])
        .pipe(replace('', camelCase))
        .pipe(replace('', kebabCase))
        .pipe(rename((path) => {
            path.basename = path.basename.replace('kebab-case-name', kebabCase)
        }))
        .pipe(gulp.dest(distPath))
};
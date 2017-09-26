#!/usr/bin/env node

const gulp = require('gulp');
const Liftoff = require('liftoff');
const yargs = require('yargs').argv;
const chalk = require('chalk');
const ng6Generator = new Liftoff({
    name: 'ng6-gen',
    processTitle: 'ng6-gen'
});

const initialProcessCwd = process.cwd();

const data = {
    name : ''
}

const createComponent = require("../generators/component/index");

gulp.task('component', createComponent(initialProcessCwd, data));

ng6Generator.launch({
    cwd: initialProcessCwd
}, () => {
    handleArguments();
});

function handleArguments() {
    if(yargs.component) {
        data.name = yargs.component;
        gulp.start('component');
    }
}

#!/usr/bin/env node

const Liftoff = require('liftoff');
const yargs = require('yargs').argv;
const createComponent = require("../generators/component/index");

const generator = new Liftoff({
    name: 'ng6-gen'
});

const initialProcessCwd = process.cwd();

generator.launch({
    cwd: initialProcessCwd
}, handleArguments);


function handleArguments() {
    if (yargs.component) {
        createComponent({cwd: initialProcessCwd, name: yargs.component});
    }
}
#!/usr/bin/env node

const handleArguments = require('./handle-arguments');
const Liftoff = require('liftoff');
const generator = new Liftoff({
    name: 'ng6-gen'
});

generator.launch({
    cwd: process.cwd()
}, handleArguments);
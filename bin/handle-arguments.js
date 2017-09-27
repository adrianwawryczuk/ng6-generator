const yargs = require('yargs').argv;
const createComponent = require("../generators/component/index");

module.exports = function handleArguments() {
    if (yargs.component) {
        createComponent({cwd: process.cwd(), name: yargs.component});
    }
};
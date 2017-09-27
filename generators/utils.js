const kebabCase = require('kebab-case');
const chalk = require('chalk');

module.exports = {
    getNames: function(componentName) {
        return {
            name: componentName,
            kebabCase: kebabCase(componentName),
            camelCase: kebabCase.reverse(componentName),
            upperCasedCamelCase: upperCaseString(kebabCase.reverse(componentName))
        }
    },

    log: {
        error: (string) => {
            console.log(chalk.red(string));
        },
        info: (string) => {
            console.log(chalk.blue(string));
        }
    }
};

function upperCaseString(string) {
    return string && string[0].toUpperCase() + string.slice(1);
}
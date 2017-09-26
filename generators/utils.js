const kebabCase = require('kebab-case');

module.exports = {
    getNames: function(componentName) {
        return {
            name: componentName,
            kebabCase: kebabCase(componentName),
            camelCase: kebabCase.reverse(componentName),
            upperCasedCamelCase: upperCaseString(kebabCase.reverse(componentName))
        }
    }
};

function upperCaseString(string) {
    return string && string[0].toUpperCase() + string.slice(1);
}
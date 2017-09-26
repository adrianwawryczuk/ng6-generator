const kebabCase = require('kebab-case');

module.exports = {
    getNames: function(componentName) {
        return {
            name: componentName,
            kebabCase: componentName,
            camelCase: componentName
        }
    }
};
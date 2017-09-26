import {assert, expect} from 'chai';
import kebabCase from 'kebab-case';
import {<%= camel-case-name =>Component, <%= camel-case-name =>Name} from './<%= kebab-case-name =>.component';

angular
    .module('app', [])
    .component(<%= camel-case-name =>Name, <%= camel-case-name =>Component);

describe('<%= kebab-case-name =>.component', () => {
    let compile,
        element,
        scope;

    const componentString = kebabCase(<%= camel-case-name =>Name);

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.inject((_$compile_, $rootScope) => {
        compile = _$compile_;
        scope = $rootScope.$new();
    }));

    it('compiles', () => {
        element = angular.element(`<${componentString}></${componentString}>`);
        element = compile(element)(scope);
        scope.$digest();

        expect(element.to.be.truthy);
    });

    it('component e2e tests')
});
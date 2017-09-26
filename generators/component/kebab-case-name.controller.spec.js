import sinon from 'sinon';
import {expect} from 'chai';
import {<%= upper-cased-camel-case-name =>Controller} from './<%= kebab-case-name =>.controller';

describe('<%= upper-cased-camel-case-name =>Controller', () => {
    let <%= camel-case-name =>Ctrl;

    beforeEach(angular.mock.inject(() => {
        <%= camel-case-name =>Ctrl = new <%= upper-cased-camel-case-name =>Controller();
    }));

    it('controller logic')
});
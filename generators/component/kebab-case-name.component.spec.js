import {assert, expect} from 'chai';
import kebabCase from 'kebab-case';
import {GlobalSearchInputComponent, GlobalSearchInputName} from './global-search-input.component';

angular
    .module('app', [])
    .component(GlobalSearchInputName, GlobalSearchInputComponent);

describe('global-search-input.component', () => {
    let compile,
        element,
        location,
        window,
        scope;

    const componentString = kebabCase(GlobalSearchInputName);

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.inject((_$compile_, $rootScope, $location, $window) => {
        compile = _$compile_;
        scope = $rootScope.$new();
        location = $location;
        window = $window;
    }));


    it('Replaces the element with the appropriate content', () => {
        element = angular.element(`<${componentString}></${componentString}>`);
        element = compile(element)(scope);
        scope.$digest();

        expect(element.find('input').attr('placeholder')).to.be.equal('');

        checkIfRendered(element);
    });


    it('Appends placeholder', () => {
        const placeholder = 'Search';

        element = angular.element(`<${componentString} placeholder="${placeholder}"></${componentString}>`);
        element = compile(element)(scope);
        scope.$digest();

        expect(element.find('input').attr('placeholder')).to.be.equal(placeholder);
        checkIfRendered(element);
    });

    it('Renders query in input from url', () => {
        const queryValue = 'Villa';

        const locationMock = sinon
            .mock(location)
            .expects('search')
            .once()
            .returns({
                query: queryValue
            });

        element = angular.element(`<${componentString}></${componentString}>`);
        element = compile(element)(scope);
        scope.$digest();

        locationMock.verify();
        expect(element.find('input').val()).to.be.equal(queryValue);
        checkIfRendered(element);
    });

    it('Tries to reload page to global-search page without query', () => {
        const locationMock = sinon
            .mock(location)
            .expects('search')
            .once()
            .returns({});

        const locationUrl = sinon.spy(location, 'url');
        const windowReload = sinon.spy(window.location, 'reload');

        const htmlElement = angular.element(`<${componentString}></${componentString}>`);
        element = compile(htmlElement)(scope);
        scope.$digest();

        const searchSpy = sinon.spy(element.controller('globalSearchInput'), 'search');

        element.find('button').triggerHandler('click');

        expect(element.find('input').val()).to.be.equal('');
        sinon.assert.calledOnce(searchSpy);
        sinon.assert.notCalled(locationUrl);
        sinon.assert.notCalled(windowReload);
        locationMock.verify();

        checkIfRendered(element);
    });

    it('Reloads page to global-search after enter in input');
});

function checkIfRendered(element) {
    expect(element.find('input').hasClass('global-search__input')).to.be.true;
    expect(element.find('button').hasClass('global-search__button')).to.be.true;
    expect(element.find('button').find('i').hasClass('fa-search')).to.be.true;
    expect(element.find('button').find('i').hasClass('fa')).to.be.true;
}
import sinon from 'sinon';
import {expect} from 'chai';
import {GlobalSearchInputController, queryNameString} from './global-search-input.controller';

describe('GlobalSearchInputController', () => {
    let location, window, globalSearchInputCtrl, sandbox;

    beforeEach(angular.mock.inject(($location, $window) => {
        sandbox = sinon.sandbox.create();
        location = $location;
        window = $window;
        globalSearchInputCtrl = new GlobalSearchInputController($location, $window);
    }));

    it('should have property queryNameString be equal to "query"', () => {
        expect(queryNameString).to.be.equal('query');
    });

    it('should have a empty searchQuery', () => {
        expect(globalSearchInputCtrl.searchQuery).to.be.equal('');
    });

    it('should initialize searchQuery empty string', () => {
        const locationMock = sinon
            .mock(location)
            .expects('search')
            .once()
            .returns({});

        globalSearchInputCtrl.$onInit();

        locationMock.verify();
        expect(globalSearchInputCtrl.searchQuery).to.be.equal('');
    });

    it('should initialize searchQuery with url parameter', () => {
        const locationMock = sinon
            .mock(location)
            .expects('search')
            .once()
            .returns({
                query: 'Villa'
            });

        globalSearchInputCtrl.$onInit();

        locationMock.verify();
        expect(globalSearchInputCtrl.searchQuery).to.be.equal('Villa');
    });

    it('should reload to global-search page with parameter', () => {
        const locationSearch = sinon
            .mock(location)
            .expects('search')
            .once()
            .returns({
                query: 'Villa'
            });

        const locationUrl = sinon
            .mock(location)
            .expects('url')
            .once()
            .withArgs(`global-search.html?${queryNameString}=Villa`);

        const windowSpy = sinon.spy(window.location, 'reload');

        globalSearchInputCtrl.$onInit();
        globalSearchInputCtrl.search();

        locationSearch.verify();
        locationUrl.verify();

        sinon.assert.calledOnce(windowSpy);

        expect(globalSearchInputCtrl.searchQuery).to.be.equal('Villa');
    });

    it('should not reload to global-search page', () => {
        const locationSearch = sinon
            .mock(location)
            .expects('search')
            .once()
            .returns({});

        const locationUrl = sinon.spy(location, 'url');
        const windowSpy = sinon.spy(window.location, 'reload');

        globalSearchInputCtrl.$onInit();
        globalSearchInputCtrl.search();

        locationSearch.verify();

        sinon.assert.notCalled(locationUrl);
        sinon.assert.notCalled(windowSpy);

        expect(globalSearchInputCtrl.searchQuery).to.be.equal('');
    });
});
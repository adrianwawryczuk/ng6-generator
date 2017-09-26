import angular from 'angular';

const globalSearchApp = 'globalSearchApp';

angular
    .module(globalSearchApp, [])
    .component(globalSearchComponentName, globalSearchComponent);
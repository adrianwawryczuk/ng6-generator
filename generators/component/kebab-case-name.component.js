import './<%= kebab-case-name =>.style.less';
import template from './<%= kebab-case-name =>.html';
import {GlobalSearchInputController as controller} from "./<%= kebab-case-name =>.controller";

export const GlobalSearchInputName = 'globalSearchInput';

export const GlobalSearchInputComponent = {
    bindings: {
        placeholder: '@'
    },
    controller,
    controllerAs: 'globalSearchInput',
    template,
};


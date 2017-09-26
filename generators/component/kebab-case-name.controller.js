export const queryNameString = 'query';

export class GlobalSearchInputController {
    constructor($location, $window) {
        this.$location = $location;
        this.$window = $window;
        this.searchQuery = '';
    }

    $onInit = () => {
        this.searchQuery = this.$location.search()[queryNameString] || '';
    };

    search() {
        if(this.searchQuery) {
            this.$location.url(`global-search.html?${queryNameString}=${this.searchQuery}`);
            this.$window.location.reload();
        }
    }
}
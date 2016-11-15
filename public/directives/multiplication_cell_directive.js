angular.module('MultiplicationCellDirective', [])
    .directive('multiplicationCell', [function() {
        // we will inject $compile
        return {
            controllerAs: 'multiplication',
            controller: ['$attrs', '$scope', function($attrs, $scope) {
                this.x = $scope.$eval($attrs.x);
                this.y = $scope.$eval($attrs.y);
                this.value = this.x * this.y;
            }]
        };
    }]);

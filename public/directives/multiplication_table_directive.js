angular.module('MultiplicationTableDirective', [])
    .directive('multiplicationTable', [function() {
        return {
            templateUrl: 'templates/multiplication-table-tpl.html',
            controllerAs: 'ctrl',
            transclude: true,
            bindToController: true,
            scope: {
                x: '=',
                y: '='
            },
            controller: function() {
                var x = this.x || 0;
                var y = this.y || 0;

                var table = this.rows = [];

                for (var i = 0; i < y; i++) {
                    var arr = table[i] = [];
                    for (var j = 0; j < x; j++) {
                        arr.push(1);
                    }
                }
            }
        };
    }]);

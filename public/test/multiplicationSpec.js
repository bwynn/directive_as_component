describe('MultiplicationApp', function() {
    // our collected remote templates
    beforeEach(module('appTemplates'));

    // our application module
    beforeEach(module('myApp'));

    describe('multiplication-table', function() {
        var scope, element, render;

        function s(value) {
            return value.replace(/\s+/g, '');
        }

        function lastCell(table) {
            var row = table[0];
            var cell = row.children[row.children.length - 1];
            if (cell.children.length) {
                cell = cell.children[cell.children.length - 1];
            }
            return angular.element(cell);
        }

        function totalCells(element) {
            return element[0].querySelectorAll('[multiplication-cell]').length;
        }

        beforeEach(inject(function($rootScope, $compile) {
            scope = $rootScope.$new();
            var compileFn = $compile(
                '<div multiplication-table x="x" y="y">' +
                ' x={{ $parent.multiplication.x }},' +
                ' y={{ $parent.multiplication.y }}, ' +
                ' v={{ $parent.value }}' +
                '</div>'
            );
            render = function() {
                element = compileFn(scope);
                $rootScope.$digest();
            }
        }));

        it('should list out a table of 0x0', function() {
            scope.x = 0;
            scope.y = 0;
            render();
            expect(totalCells(element)).toBe(0);
        });
        it('should list out a table of 1x1');
        it('should list out a table of 2x2');
        it('should list out a table of NxM');
    });
});

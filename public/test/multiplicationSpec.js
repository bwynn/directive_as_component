describe('MultiplicationApp', function() {
    // our collected remote templates
    beforeEach(module('appTemplates'));

    // our application module
    beforeEach(module('myApp'));

    describe('multiplication-table', function() {
        var scope, element, render;

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

        it('should list out a table of 0x0');
        it('should list out a table of 1x1');
        it('should list out a table of 2x2');
        it('should list out a table of NxM');
    });
});

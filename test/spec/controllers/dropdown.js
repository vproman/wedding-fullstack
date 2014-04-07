'use strict';

describe('Controller: DropdownCtrl', function () {

  // load the controller's module
  beforeEach(module('weddingFullstackApp'));

  var DropdownCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DropdownCtrl = $controller('DropdownCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

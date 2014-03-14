'use strict';

describe('Controller: RsvpCtrl', function () {

  // load the controller's module
  beforeEach(module('weddingFullstackApp'));

  var RsvpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RsvpCtrl = $controller('RsvpCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

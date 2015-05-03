'use strict';

describe('Controller: OpsrouteCtrl', function () {

  // load the controller's module
  beforeEach(module('onepagesoundcloudApp'));

  var OpsrouteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OpsrouteCtrl = $controller('OpsrouteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

'use strict';

angular.module('weddingFullstackApp')
  .controller('RsvpCtrl', function ($scope, $http, User, Rsvp) {
    $scope.model = Rsvp.get({}, function() {
    });
  });

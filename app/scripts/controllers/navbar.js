'use strict';

angular.module('weddingFullstackApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }, {
      'title': 'RSVP',
      'link': '/rsvp'
    }, {
      'title': 'Information',
      'link': '/info'
    }, {
      'title': 'Travel',
      'link': '/travel'
    }, {
      'title': 'Photos',
      'link': '/photos'
    }, {
      'title': 'Contact',
      'link': '/contact'
    }, {
      'title': 'Settings',
      'link': '/settings'
    }];
    
    $scope.logout = function() {
      Auth.logout()
      .then(function() {
        $location.path('/login');
      });
    };
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });

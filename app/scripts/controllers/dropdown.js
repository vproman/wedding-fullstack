'use strict';

angular.module('weddingFullstackApp')
  .controller('DropdownCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.options = [
        { text : 'Will Attend', value : true },
        { text : 'Will Not Attend', value : false }
      ];
  });

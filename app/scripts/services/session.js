'use strict';

angular.module('weddingFullstackApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });

'use strict';

angular.module('weddingFullstackApp')
  .factory('Rsvp', function ($resource) {
    return $resource('/api/rsvp', {},
      {'save':   {method:'POST'} });
  });

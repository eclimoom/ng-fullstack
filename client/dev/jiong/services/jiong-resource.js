;(function(ng) {
  'use strict';

  ng.module('jiong')
    .factory('JiongResource', [
      '$resource',
      function($resource) {
        var _url = '/api/jiongs/:id';
        var _params = {};
        var _methods = {'query': {method:'GET', isArray:false}};

        return $resource(_url, _params, _methods);
      }
    ]);

}(window.angular));

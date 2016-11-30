;(function(ng) {
  'use strict';

  ng.module('jiong')
    .factory('JiongDAO', [
      '$q',
      'Jiong',
      'JiongResource',
      function($q, Jiong, JiongResource) {
        var JiongDAO = function() {};

        JiongDAO.prototype.getAll = function() {
          var _onSuccess = function(jiongs) {
            // do something with the response from the server, like extending a model or something

            return jiongs; // this will be returned as a resolved promise
          };

          var _onError = function(error) {
            // do something with the error, like making it more readable or something
            return $q.reject(error); // this will be returned as a rejected promise
          };

          return JiongResource
            .query()
            .$promise
            .then(_onSuccess)
            .catch(_onError);
        };

        JiongDAO.prototype.findOne = function(params) {
          var _onSuccess = function(jiong) {
            // do something with the response from the server, like extending a model or something

            return jiong; // this will be returned as a resolved promise
          };

          var _onError = function(error) {
            // do something with the error, like making it more readable or something
            return $q.reject(error); // this will be returned as a rejected promise
          };

          return JiongResource
            .get(params)
            .$promise
            .then(_onSuccess)
            .catch(_onError);
        };



        JiongDAO.prototype.create = function(jiong) {
          if (!ng.isObject(jiong) || !(jiong instanceof Jiong) || !jiong.isValid()) {
            return $q.reject(new TypeError('Invalid jiong to be created.'));
          }

          var _onSuccess = function(jiong) {
            return new Jiong(jiong);
          };

          var _onError = function(error) {
            return $q.reject(error);
          };

          return JiongResource
            .save(jiong)
            .$promise
            .then(_onSuccess)
            .catch(_onError);
        };

        JiongDAO.prototype.delete = function(id) {
          if (!ng.isString(id)) {
            return $q.reject(new TypeError('Invalid id for deletion.'));
          }

          var _onSuccess = function() {
            return;
          };

          var _onError = function(error) {
            return $q.reject(error);
          };

          return JiongResource
            .delete({
              id: id
            })
            .$promise
            .then(_onSuccess)
            .catch(_onError);
        };

        return new JiongDAO();
      }
    ]);

}(window.angular));

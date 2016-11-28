;(function(ng) {
  'use strict';

  ng.module('jiong')
    .controller('JiongController', [
      '$log',
      'Jiong',
      'JiongDAO',
      function($log, Jiong, JiongDAO) {
        var self = this;

        self.jiong = new Jiong();
        self.jiongs = [];

        self.create = function(jiong) {
          JiongDAO
            .create(jiong)
            .then(function(newJiong) {
              self.jiongs.push(newJiong);
              self.jiong = new Jiong();
            })
            .catch($log.error);
        };

        function _getAll() {


          return JiongDAO
            .getAll()
            .then(function(jiongs) {
              self.jiongs = jiongs;
              return self.jiongs;
            })
            .catch($log.error);
        }

        self.delete = function(id) {
          JiongDAO
            .delete(id)
            .then(function() {
              return _getAll();
            })
            .catch($log.error);
        };

        _getAll();

        return self;
      }
    ]);
}(window.angular));

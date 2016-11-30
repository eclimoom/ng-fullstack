;(function(ng) {
  'use strict';

  ng.module('jiong')
    .controller('JiongController', [
      '$log',
      'Jiong',
      'JiongDAO',
      function($log, Jiong, JiongDAO) {

        var vm = this;

        vm.jiong = new Jiong();
        vm.jiongs = [];

        vm.create = function(jiong) {
          //TODO:add user system
          jiong.uid = jiong.title;
          JiongDAO
            .create(jiong)
            .then(function(newJiong) {
              vm.jiongs.push(newJiong);
              vm.jiong = new Jiong();
            })
            .catch($log.error);
        };

        function _getAll() {


          return JiongDAO
            .getAll()
            .then(function(jiongs) {
              vm.jiongs = jiongs;
              return vm.jiongs;
            })
            .catch($log.error);
        }

        vm.delete = function(id) {
          JiongDAO
            .delete(id)
            .then(function() {
              return _getAll();
            })
            .catch($log.error);
        };

        _getAll();

        return vm;
      }
    ]);
}(window.angular));

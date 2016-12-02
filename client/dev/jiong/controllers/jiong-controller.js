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
        vm.result = {};
        vm.pageCurrent = 1;



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

        //_params = {pageObj:{pageIndex:1,pageSize:10},queryObj:{}};
        function _getAll(params) {

          return JiongDAO
            .getAll(params)
            .then(function(data) {
              vm.result = data;
              vm.pageCurrent = data.pageNum;
              return vm.result;
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

        _getAll({pageIndex:vm.pageCurrent,pageSize:2});

        vm.pageChanged = function(){
          _getAll({pageIndex:vm.pageCurrent,pageSize:2});
        }

        return vm;
      }
    ]);
}(window.angular));

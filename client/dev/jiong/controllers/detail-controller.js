;(function(ng) {
  'use strict';

  ng.module('jiong')
    .controller('DetailController', [
      '$log',
      '$stateParams',
      'Jiong',
      'JiongDAO',
      function($log,$stateParams,Jiong, JiongDAO) {


        var vm = this;

        var _id = $stateParams.id;

        vm.jiong = new Jiong();

        function _getById() {
          return JiongDAO
            .findOne({ id: _id })
            .then(function(jiong) {
              vm.jiong = jiong;
              return vm.jiong;
            })
            .catch($log.error);
        }


        _getById();

        return vm;
      }
    ]);
}(window.angular));

;(function(ng) {
  'use strict';

  ng.module('jiong')
    .controller('DetailController', [
      '$log',
      '$stateParams',
      'JiongDAO',
      function($log,$stateParams, JiongDAO) {


        var vm = this;
        var _id = $stateParams.id;
        vm.result = {current:{}};

        function _getById() {
          return JiongDAO
            .getDetail({ id: _id })
            .then(function(data) {
              vm.result = data || {current:{}};
              return vm.result;
            })
            .catch($log.error);
        }


        _getById();

        return vm;
      }
    ]);
}(window.angular));

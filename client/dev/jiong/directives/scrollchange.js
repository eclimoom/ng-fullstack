/**
 * Created by hejunji on 28/11/2016.
 */
(function() {
  'use strict';
  angular.module('jiong')
    .directive("scrollChange", scrollChange);
  function scrollChange($window,$timeout) {
    var directive =  function(scope, element) {
      var t = null;
      angular.element($window).bind("scroll", function() {
        $timeout.cancel(t);
        t = $timeout(waitScroll,0);
      });

      function waitScroll(){
        if ($window.pageYOffset >= 100) {
          element.addClass('fixed-header-on');
        } else {
          element.removeClass('fixed-header-on');
        }
      }

    };
    return directive;

  }

})();

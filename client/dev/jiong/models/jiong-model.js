;(function(ng) {
  'use strict';

  ng.module('jiong')
    .factory('Jiong', [function() {
      var Jiong = function(jiong) {
        this.title = null;
        this.content = null;
        this.uid = null;
        ng.extend(this, jiong);
      };

      var MIN_ACCEPTED_LENGTH = 5;

      Jiong.prototype.isValid = function() {
        var _isDefined = ng.isDefined(this.content);
        var _isString = ng.isString(this.content);
        var _isBigEnough = (_isDefined && _isString) ? this.content.length >= MIN_ACCEPTED_LENGTH : false;
        return _isDefined && _isString && _isBigEnough;
      };

      return Jiong;
    }]);

}(window.angular));

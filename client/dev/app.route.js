;(function (ng) {
  'use strict';

  ng.module('jiong')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("app/main");
      $stateProvider
        .state('app', {
          url: "/app",
          templateUrl: "layout.html",
          abstract: true
        })
        .state('app.main', {
          url: "/main",
          templateUrl: "jiong/templates/jiong.html",
          controller: 'JiongController',
          controllerAs: 'jiongCtrl'
        })

        //客户管理
        //.state('app.personnel-add', {
        //  url: '/personnel-add',
        //  templateUrl: 'views/user/personnel-add.html',
        //  //resolve : {
        //  //  getUserInfo:  function(User,cookieStore,$q){
        //  //    return (cookieStore.get("loginId") && User.getUserById({uid:cookieStore.get("loginId")},{}));
        //  //  }
        //  //},
        //  controller: 'PersonnelCtrl'
        //})


    }
    ]);

}(window.angular));

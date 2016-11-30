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
          controllerAs: 'vm'
        })

        .state('app.adminedit', {
          url: "/superyyhz",
          templateUrl: "jiong/templates/superedit.html",
          controller: 'JiongController',
          controllerAs: 'vm'
        })
        .state('app.detail', {
          url: "/detail/:id",
          templateUrl: "jiong/templates/detail.html",
          controller: 'DetailController',
          controllerAs: 'vm'
        })


      //.state('app.detail', {
        //  url: '/detail/:id',
        //  templateUrl: 'jiong/templates/detail.html',
        //  //resolve : {
        //  //  getUserInfo:  function(User,cookieStore,$q){
        //  //    return (cookieStore.get("loginId") && User.getUserById({uid:cookieStore.get("loginId")},{}));
        //  //  }
        //  //},
        //  controller: 'DetailCtrl'
        //})


    }
    ]);

}(window.angular));

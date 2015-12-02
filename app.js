define([
  'angular',
  'core-directive',
  'app-main-ctrl',
  'ui-router',
  'routes',
  'rr'
], function (angular, directive, appMainCtrl, uiRouter, routes, rr) {

  console.log(rr);

  var app = angular.module('AppName', [
    // Core Module Dependancies Required
    'ui.router',
    'core.directive',
    'routeResolverServices',
  ]);




  app.config(function ($stateProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $urlRouterProvider, routeResolverProvider) {


    var route = routeResolverProvider.route;

    app.lazy = {
      compile: $compileProvider,
      controller: $controllerProvider.register,
      directive: $compileProvider.directive,
      filter: $filterProvider.register,
      factory: $provide.factory,
      service: $provide.service
    };


    angular.forEach(routes.states, function (state, name) {
      console.log(state, name);
      $stateProvider.state(name, routeResolverProvider.route.resolve(state));
    });

    $urlRouterProvider.otherwise('/');


    // $stateProvider

    //   .state('app', {
    //     url:'/',
    //   })

    //   .state('app.view-d', route.resolve({
    //     url: 'view-d',
    //     views: {
    //       'page@': {
    //         templateUrl: 'view-a.tmpl.html',
    //         controller: 'ViewACtrl',
    //         deps: [
    //           'view-a.ctrl',
    //           'lazy-directive-2.js',
    //           'service-abc.js',
    //         ]
    //       }
    //     }
    //   }))

    //   // .state('app.view-c', route.resolve())

    //   .state('app.view-a', {
    //     url: 'view-a',
    //     views: {
    //       'page@': {
    //         templateUrl: 'view-a.tmpl.html',
    //         controller: 'ViewACtrl',
    //         resolve: {
    //           deps: function ($q, $rootScope) {
    //             var deferred = $q.defer();

    //             var dependencies = [
    //               'view-a.ctrl',
    //               'lazy-directive-2.js',
    //               'service-abc.js',
    //             ];

    //             require(dependencies, function() {
    //               $rootScope.$apply(function() {
    //                 deferred.resolve();
    //               });
    //             });

    //             return deferred.promise;
    //           }
    //         }
    //       }
    //     }
    //   })

    //   .state('app.view-b', {
    //     url: 'view-b',
    //     views: {
    //       'page@': {
    //         templateUrl: 'view-b.tmpl.html',
    //         controller: 'ViewBCtrl',
    //         resolve: {
    //           deps: function ($q, $rootScope) {
    //             var deferred = $q.defer();

    //             var dependencies = [
    //               'view-b.ctrl',
    //               'lazy-directive-3.js',
    //               'service-abc.js',
    //             ];

    //             require(dependencies, function() {
    //               $rootScope.$apply(function() {
    //                 deferred.resolve();
    //               });
    //             });

    //             return deferred.promise;
    //           }
    //         }
    //       }
    //     }
    //   })


      ;

  });



  app.controller('AppMainCtrl', appMainCtrl);

  return app;

});
define([
  'angular',
  'directive',
  'app-main-ctrl',
  'ui-router'
], function (angular, directive, appMainCtrl, uiRouter) {


  var app = angular.module('AppName', [
    // Core Module Dependancies Required
    'ui.router',
    'core.directive',
  ]);

  app.config(function ($stateProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $urlRouterProvider) {

    app.lazy = {
      compile: $compileProvider,
      controller: $controllerProvider.register,
      directive: $compileProvider.directive,
      filter: $filterProvider.register,
      factory: $provide.factory,
      service: $provide.service
    };

    $urlRouterProvider.otherwise('/');

    $stateProvider

      .state('app', {
        url:'/',
      })

      .state('app.view-a', {
        url: 'view-a',
        views: {
          'page@': {
            templateUrl: 'view-a.tmpl.html',
            controller: 'ViewACtrl',
            resolve: {
              deps: function ($q, $rootScope) {
                var deferred = $q.defer();

                var dependencies = [
                  'view-a.ctrl',
                  'lazy-directive-2.js',
                ];

                require(dependencies, function() {
                  $rootScope.$apply(function() {
                    deferred.resolve();
                  });
                });

                return deferred.promise;
              }
            }
          }
        }
      })

      .state('app.view-b', {
        url: 'view-b',
        views: {
          'page@': {
            templateUrl: 'view-b.tmpl.html',
            controller: 'ViewBCtrl',
            resolve: {
              deps: function ($q, $rootScope) {
                var deferred = $q.defer();

                var dependencies = [
                  'view-b.ctrl',
                  'lazy-directive-3.js',
                ];

                require(dependencies, function() {
                  $rootScope.$apply(function() {
                    deferred.resolve();
                  });
                });

                return deferred.promise;
              }
            }
          }
        }
      })


      ;

  });



  app.controller('AppMainCtrl', appMainCtrl);

  return app;

});
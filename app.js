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
      $stateProvider.state(name, routeResolverProvider.route.resolve(state));
    });

    $urlRouterProvider.otherwise('/');
  });



  app.controller('AppMainCtrl', appMainCtrl);

  return app;

});
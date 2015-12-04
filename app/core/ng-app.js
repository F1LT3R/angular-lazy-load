define([
  'angular',
  'core/ng-app.ctrl',
  'core/ng-routes',
  'core/ng-lazyload',
  'core/core-directive',
  'ui-router',
], function (angular, NgAppCtrl, routes) {


  var app = angular.module(require.settings.appname, [
    // Define core modules:
    //   a) needed start app
    //   b) used in every/most view(s)
    'ui.router',
    'core.directive',
    'core.lazyload',
  ]);


  app.config(function ($stateProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $urlRouterProvider, lazyloadProvider) {

    // Expose Providers to App so RequireJS modules can access them via lazyload
    app.lazyload = {
      compile     : $compileProvider,
      controller  : $controllerProvider.register,
      directive   : $compileProvider.directive,
      filter      : $filterProvider.register,
      factory     : $provide.factory,
      service     : $provide.service
    };


    // Decorate routes with lazyload route resolver
    angular.forEach(routes.states, function (state, name) {
      $stateProvider.state(name, lazyloadProvider.route.resolve(state));
    });


    $urlRouterProvider.otherwise('/');
  });


  app.controller('AppCtrl', NgAppCtrl);

  return app;

});
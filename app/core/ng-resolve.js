define(['angular', 'core/ng-routes'], function (angular, routes) {

  var routeResolver = function () {

    this.$get = function () {
      return this;
    };


    this.route = function () {

      var resolve = function (routeDef) {

        angular.forEach(routeDef.views, function (view) {

          if (view.hasOwnProperty('templateUrl')) {
            view.templateUrl = routes.config.staticDirectory + view.templateUrl + '.html';
          }


          // Rewrite urls
          view.deps.map(function (dep) {
            return routes.config.staticDirectory + dep;
          });

          view.resolve = { load: ['$q', '$rootScope', function ($q, $rootScope) {
            return resolveDependencies($q, $rootScope, view.deps);
          }]};
        });

        return routeDef;
      },

      resolveDependencies = function ($q, $rootScope, dependencies) {
        var defer = $q.defer();

        require(dependencies, function () {
          defer.resolve();
          $rootScope.$apply();
        });

        return defer.promise;
      };


      return {
        resolve: resolve
      };

    }();

  };

    var servicesApp = angular.module('routeResolverServices', []);

    // Must be a provider since it will be injected into module.config()
    servicesApp.provider('routeResolver', routeResolver);


    return servicesApp;
});

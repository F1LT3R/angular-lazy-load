define(['angular', 'core/ng-routes', 'core/load-css'], function (angular, routes, loadCss) {

  var routeResolver = function () {

    this.$get = function () {
      return this;
    };


    this.route = function () {

      var resolve = function (routeDef) {

        angular.forEach(routeDef.views, function (view, name) {

          if (view.hasOwnProperty('templateUrl')) {
            view.templateUrl = routes.config.staticDirectory + view.templateUrl + '.html';
          }


          // Rewrite urls
          view.deps.map(function (dep) {
            return routes.config.staticDirectory + dep;
          });

          view.resolve = {

            state: ['$rootScope', '$state', function ($rootScope, $state) {
              // console.log(123, $state, $rootScope);
              // $rootScope.$apply(function () {
                // $rootScope.state = $state.current.name;
              // });
              // console.log(123, $rootScope);
              // console.log(456, $scope);

              // $rootScope.state = $state.current.name;
              // $scope.$digest();
            }],

            loadDeps: ['$q', '$rootScope', function ($q, $rootScope) {
              return resolveDependencies($q, $rootScope, view.deps);
            }],

            loadStyle:[function() {
              if (view.hasOwnProperty('style')) {
                loadCss.load(routes.config.staticDirectory + view.style);
              }
            }]

          };
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

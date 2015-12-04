define(['angular', 'core/ng-routes', 'core/load-css'], function (angular, routes, loadCss) {

  var routeResolver = function () {

    this.$get = function () {
      return this;
    };


    this.route = function () {

      var resolve = function (routeDef) {

        angular.forEach(routeDef.views, function (view, name) {

          var depCss = [],
            depJs = [];

          
          view.deps.forEach(function (dep) {
            dep = routes.config.staticDirectory + dep;

            var ext = dep.slice(dep.lastIndexOf('.')),
              file = dep.slice(0, dep.lastIndexOf('.'));

            if (ext === '.js') {
              depJs.push(file);
              return;
            }

            if (ext === '.css') {
              depCss.push(dep);
              return;
            }

            if (ext === '.html') {
              view.templateUrl = dep;
            }
          });


          view.resolve = {

            loadDeps: ['$q', '$rootScope', function ($q, $rootScope) {
              return resolveDependencies($q, $rootScope, depJs);
            }],

            loadStyle:[function() {
              depCss.forEach(function (cssFile) {
                loadCss.load(cssFile);
              });
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

define([
  'angular',
  'core/ng-routes',
  'core/load-css'
], function (angular, routes, loadCss) {

  // Pattern modified from Dan Wahlin's blog, see: README.md

  var lazyloadRouteResolver = function () {

    this.$get = function () {
      return this;
    };


    this.route = function () {

      var resolve = function (routeDef) {

        // Create dependency lists for each view
        angular.forEach(routeDef.views, function (view, name) {

          var depCss = [],
            depJs = [];


          // Subdivide the deps based on file extsnsion
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

            // Only one template can be used per ui-view
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


  var servicesApp = angular.module('core.lazyload', []);

  // Must be a provider since it will be injected into module.config()
  servicesApp.provider('lazyload', lazyloadRouteResolver);

  return servicesApp;
});

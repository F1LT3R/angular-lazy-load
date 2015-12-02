define(['angular'], function (angular) {

  var module = angular.module('core.route-resolver.srvc')
    .provider('RouteResolver', ['$q', '$rootScope', function ($q, $rootScope) {

    var RouteResolver = {

      resolveDeps: function () {
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
      },

    };

    return RouteResolver;

  }]);

  return module;

});
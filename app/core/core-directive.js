define(['angular'], function (angular) {

  // Add a core directive to the app
  angular.module('core.directive', [])
  .directive('coredirective', function () {

    return {
      template: '<h3>Core Directive (loaded via RequireJS not lazyloadProvider)</h3>',

      scope: {},

      link: function (scope, elem, attrs) {
        // console.log(scope, elem, attrs);
      }
    };
  });

});
define(['angular'], function (angular) {
  return angular.module('core.directive', [])
  .directive('coredirective', function () {
    return {
      template: '<h3>Core Directive (not lazy, but uses require to load)</h3>',
      scope: {},
      link: function (scope, elem, attrs) {
        // console.log(scope, elem, attrs);
      }
    };
  });
});
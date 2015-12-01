define(['angular'], function (angular) {
  return angular.module('test.directive', [])
  .directive('testdirective', function () {
    return {
      template: '<h3>Test Directive</h3>',
      scope: {},
      link: function (scope, elem, attrs) {
        // console.log(scope, elem, attrs);
      }
    };
  });
});
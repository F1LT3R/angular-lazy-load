define(['ng-lazy'], function (nglazy) {
  return nglazy.module('lazy.directive', [])
  .directive('lazydirective', function () {
    return {
      template: '<h3>Lazy Directive</h3>',
      scope: {},
      link: function (scope, elem, attrs) {
        console.log(scope, elem, attrs);
      }
    };
  });
});
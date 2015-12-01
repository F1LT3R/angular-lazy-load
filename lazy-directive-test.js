require(['app'], function (app) {
  return app.compileProvider.directive('lazydirectivetest', function () {
    return {
      restrict: 'E',
      template: '<div>Lazy Directive Test</div>',
      link: function(scope, element, attrs) {
        console.log('lazydirectivetest');
      }
    };
  });
});
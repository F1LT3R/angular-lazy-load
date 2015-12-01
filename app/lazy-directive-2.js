define(['app'], function (app) {

  return app.lazy.directive('lazydirective2', function () {
    return {
      restrict: 'E',
      template: '<div>Lazy Directive 2</div>',
      link: function(scope, element, attrs) {
        console.log('lazydirective2');
      }
    };
  });

});
define(['app'], function (app) {

  return app.lazy.directive('lazydirective3', function () {
    return {
      restrict: 'E',
      template: '<div>Lazy Directive 3</div>',
      link: function(scope, element, attrs) {
        console.log('lazydirective3');
      }
    };
  });

});
define(['core/ng-app'], function (app) {

  app.lazyload.directive('lazydirective2', function () {

    return {
      template: '<div>Lazy Directive 2</div>',

      restrict: 'E',

      link: function(scope, element, attrs) {
        // console.log(scope, element, attrs);
      }
    };
  });

});
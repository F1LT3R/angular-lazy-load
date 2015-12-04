define(['core/ng-app'], function (app) {

  app.lazyload.directive('lazydirective3', function () {

    return {
      template: '<div>Lazy Directive 3</div>',

      restrict: 'E',

      link: function(scope, element, attrs) {
        // console.log(scope, element, attrs);
      }
    };
  });

});
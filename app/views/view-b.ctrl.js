define(['app'], function (app) {

  return app.lazy.controller('ViewBCtrl', ['$scope', 'serviceABC', function($scope, serviceABC){
     $scope.somethingcool2 = 'Cool2!';
     $scope.foo = serviceABC.foo;
  }]);

});
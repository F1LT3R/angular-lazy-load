define(['app'], function (app) {

  return app.lazy.controller('ViewACtrl', ['$scope', 'serviceABC', function($scope, serviceABC){
     $scope.somethingcool = 'Cool!';
     serviceABC.setFoo('bar');
  }]);

});
define(['core/ng-app'], function (app) {

  app.lazyload.controller('ViewACtrl', ['$scope', 'serviceABC',
  function($scope, serviceABC){

     $scope.somethingcool = 'Cool!';
     serviceABC.setFoo('bar');
  }]);

});
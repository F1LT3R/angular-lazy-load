define(['app'], function (app) {

  return app.controllerProvider.register('ViewACtrl', function($scope){
     $scope.somethingcool = 'Cool!';
  });

});
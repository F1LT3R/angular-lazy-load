define(['app'], function (app) {

  console.log(app.lazy.controller);

  return app.lazy.controller('ViewACtrl', function($scope){
     $scope.somethingcool = 'Cool!';
  });

});
define(['app', 'core/config'], function (app) {

  app.controller('AppMainCtrl', ['$scope', 'appconfig',
  function ($scope, appconfig) {
      $scope.title = appconfig.title;
  }]);

});
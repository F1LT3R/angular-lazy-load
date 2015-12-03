define(['core/ng-app', 'core/ng-settings'], function (app) {

  app.controller('AppMainCtrl', ['$scope', 'settings',
  function ($scope, appconfig) {
      $scope.title = appconfig.title;
  }]);

});
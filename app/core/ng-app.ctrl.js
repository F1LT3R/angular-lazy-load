define([
  'core/ng-app',
  'core/ng-settings',
], function (app) {

  app.controller('AppMainCtrl', [
    '$scope', 'settings', '$state', '$rootScope',
  function ($scope, settings, $state, $rootScope) {
      
      $scope.title = settings.title;
      $scope.subtitle = settings.subtitle;

      $rootScope.$on('$stateChangeSuccess', function (event, toState) {
        $scope.state = toState.name;
      });
  }]);

});
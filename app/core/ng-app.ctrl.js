define([
  // Angular App already bootstrapped
  'core/ng-app',
  'core/ng-settings',
], function (app) {

  // Defines the main controller for the Angular App
  app.controller('AppCtrl', [
  '$scope', 'settings', '$state', '$rootScope',
  function ($scope, settings, $state, $rootScope) {

      $scope.title = settings.title;
      $scope.subtitle = settings.subtitle;


      $rootScope.$on('$stateChangeSuccess', function (event, toState) {

      // Update <HTML> element's state attr (used for state-based CSS)
        $scope.state = toState.name;
      });
  }]);

});
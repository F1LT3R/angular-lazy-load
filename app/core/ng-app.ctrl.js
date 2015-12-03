define(['core/ng-app', 'core/ng-settings'], function (app) {

  app.controller('AppMainCtrl', ['$scope', 'settings', '$state', '$rootScope',
  function ($scope, settings, $state, $rootScope) {
      $scope.title = settings.title;
      console.log($state);

      // $scope.state = $state.current;
      // $scope.$watch('state.name', function (asd) {
      //   console.log(asd, 123);
      // });
      // $scope.state = 'baz';
      // $scope.state = $rootScope.state;


      $rootScope.$on('$stateChangeSuccess', function (event, toState) {
        $scope.state = toState.name;
      });
  }]);

});
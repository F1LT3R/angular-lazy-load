define(['app', 'config'], function (app) {

  app.controller('AppMainCtrl', ['$scope', 'config', 'LazyDirectiveLoader', '$state',
  function ($scope, config, LazyDirectiveLoader, $state) {
    $scope.title = config.title;

    console.log(123);

    LazyDirectiveLoader.load('LazyDirectiveTest').then(function () {
      console.log(456);

      $state.go('app.view-a', null, { reload: true });
    });

  }]);

});
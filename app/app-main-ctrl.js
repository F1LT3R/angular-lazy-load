define(['app', 'config'], function (app) {

  app.controller('AppMainCtrl', ['$scope', 'config', 'LazyDirectiveLoader', '$state',
  function ($scope, config, LazyDirectiveLoader, $state) {
    $scope.title = config.title;

    LazyDirectiveLoader.load('LazyDirectiveTest').then(function () {
      console.log('ok');
      console.log(arguments);
      $state.go('view-a');
    });

  }]);

});
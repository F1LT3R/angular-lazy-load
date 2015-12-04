require([
  // We need the
  'angular',
  'core/ng-app.ctrl',
], function (angular, NgAppCtrl) {

  // Start the Angular App
  return angular.bootstrap(document, [require.settings.appname]);
});
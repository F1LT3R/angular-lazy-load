// The main file that kicks everything off
require(['core/ng-app.ctrl', 'angular'], function (NgAppCtrl, angular) {
  return angular.bootstrap(document, ['AppName']);
});
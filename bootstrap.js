// The main file that kicks everything off
require(['app-main-ctrl', 'angular'], function (mainctrl, angular) {
  return angular.bootstrap(document, ['AppName']);
});
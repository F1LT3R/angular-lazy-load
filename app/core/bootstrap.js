// The main file that kicks everything off
require(['core/main-ctrl', 'angular'], function (mainctrl, angular) {
  return angular.bootstrap(document, ['AppName']);
});
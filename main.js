require.config({
  waitSeconds: 7,
  paths: {
    'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min',
    'ui-router': '//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.min',
    'core'      : 'app/core',
    'views'     : 'app/views',
    'directives': 'app/directives',
    'services'  : 'app/services',
  },
  shim: {
    'angular': {
      exports: 'angular'
    },
    'ui-router': {
      deps: ['angular'],
    },
  },
  deps: ['core/ng-bootstrap'],
});
define(function () {

  // Used to create bundles of common dependencies
  var bundles = {

    viewA: [
      'views/view-a.ctrl.js',
      'directives/lazy-directive-2.js',
      'services/service-abc.js',
      'views/view-a.css',
    ],


  };

  var routes = {

    config: {
      staticDirectory: './app/',
    },


    states: {

      'app':
      {
        url: '/'
      },


      'app.view-a':
      {
        url: 'view-a',
        views: {
          'page@': {
            templateUrl: 'views/view-a.tmpl.html',
            controller: 'ViewACtrl',
            deps: bundles.viewA,
            // deps: [
            //   'views/view-a.ctrl',
            //   'directives/lazy-directive-2',
            //   'services/service-abc',
            // ],
          }
        }
      },


      'app.view-b':
      {
        url: 'view-b',
        views: {
          'page@': {
            templateUrl: 'views/view-b.tmpl.html',
            controller: 'ViewBCtrl',
            deps: [
              'views/view-b.ctrl.js',
              'directives/lazy-directive-3.js',
              'services/service-abc.js',
              'views/view-b.css',
            ],
          }
        }
      },


    }
  };


  return routes;

});
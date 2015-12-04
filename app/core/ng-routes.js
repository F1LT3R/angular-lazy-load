define(function () {

  var bundles = {

    viewA: [
      'views/view-a.ctrl.js',
      'views/view-a.tmpl.html',
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
            // templateUrl: 'views/view-a.tmpl.html',
            controller: 'ViewACtrl',
            deps: bundles.viewA,
          }
        }
      },


      'app.view-b':
      {
        url: 'view-b',
        views: {
          'page@': {
            controller: 'ViewBCtrl',
            deps: [
              'views/view-b.ctrl.js',
              'views/view-b.tmpl.html',
              'views/view-b.css',
              'directives/lazy-directive-3.js',
              'services/service-abc.js',
            ],
          }
        }
      },


    }
  };


  return routes;

});
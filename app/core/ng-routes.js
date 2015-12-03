define({

  config: {
    staticDirectory: './app/',
  },

  // Used to create bundles of common dependancies, Eg: survey components
  bundles: {
    surveys: [
      //
    ]
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
          templateUrl: 'views/view-a.tmpl',
          controller: 'ViewACtrl',
          deps: [
            'views/view-a.ctrl',
            'directives/lazy-directive-2',
            'services/service-abc',
          ],
        }
      }
    },


    'app.view-b':
    {
      url: 'view-b',
      views: {
        'page@': {
          templateUrl: 'views/view-b.tmpl',
          controller: 'ViewBCtrl',
          deps: [
            'views/view-b.ctrl',
            'directives/lazy-directive-3',
            'services/service-abc',
          ],
        }
      }
    },


  }

});
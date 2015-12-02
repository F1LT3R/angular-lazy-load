define({

  config: {
    staticDirectory: './',
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
          templateUrl: 'view-a.tmpl.html',
          controller: 'ViewACtrl',
          deps: [
            'view-a.ctrl',
            'lazy-directive-2.js',
          ],
        }
      }
    },


    'app.view-b':
    {
      url: 'view-b',
      views: {
        'page@': {
          templateUrl: 'view-b.tmpl.html',
          controller: 'ViewBCtrl',
          deps: [
            'view-b.ctrl',
            'lazy-directive-3.js',
            'service-abc.js',
          ],
        }
      }
    },


  }

});
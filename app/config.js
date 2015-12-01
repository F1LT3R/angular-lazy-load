define(['app'], function (app) {

  app.factory('config', function () {

    return {

      a: 1,
      b: 2,
      title: 'Test App',

      read: function (name) {
        return this[name] || undefined;
      },

    };

  });

  return app;

});
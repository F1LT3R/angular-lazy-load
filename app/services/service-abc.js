define(['core/ng-app'], function (app) {

  return app.lazy.service('serviceABC', function () {

    var serviceABC = {

      foo: null,

      setFoo: function (val) {

        serviceABC.foo = val;

        return serviceABC.val;
      },

      baz: 123,

    };

    return serviceABC;

  });

});
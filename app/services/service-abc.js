define(['core/ng-app'], function (app) {

  app.lazyload.service('serviceABC', function () {

    var serviceABC = {
      foo: null,

      setFoo: function (val) {
        serviceABC.foo = val;
        return serviceABC.val;
      },
    };

    return serviceABC;
  });

});
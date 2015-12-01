define(['ng-lazy'], function (nglazy) {

  var modules = {}
    , directives = {}
    ;

  var nglazy = {

    module: function (name, params) {
      if (!params) {
        console.log('aha  mods!');
        return modules[name];
      }

      modules[name] = params;
      return nglazy;
    },

    directive: function (name, params) {
      if (!params) {
        return directives[name];
      }

      directives[name] = params;
      return nglazy;
    },



  };

  return nglazy;

});
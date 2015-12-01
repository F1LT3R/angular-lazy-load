define([
  'angular',
  'directive',
  'app-main-ctrl',
  'ui-router'
], function (angular, directive, appMainCtrl, uiRouter) {

  console.log(uiRouter, 'uirouter');

  var app = angular.module('AppName', [
    // Angluar Module Deps
    'ui.router',
    'test.directive',
  ]);


  app.config(['$compileProvider', '$stateProvider', '$urlRouterProvider',
  function ($compileProvider, $stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

      .state('root', {
        url:'/',
      })

      .state('view-a', {
        url:'/view-a',
        views: {
          'page@': {
            templateUrl: 'view-a.tmpl.html',
          },
        }
      })
    ;

    app.compileProvider = $compileProvider;
  }]);


  // app.config(['$compileProvider', function ($compileProvider) {
  //   app.compileProvider = $compileProvider;
  // }]);



  app.service('LazyDirectiveLoader', ['$rootScope', '$q', '$compile',
    function ($rootScope, $q, $compile) {

    // This is a dictionary that holds which directives are stored in which files,
    // so we know which file we need to download for the user
    var _directivesFileMap = {
      'LazyDirectiveTest': './lazy-directive-test.js'
    };

    var _load = function(directiveName) {

        // make sure the directive exists in the dictionary
        if (!_directivesFileMap.hasOwnProperty(directiveName)) {
          console.log('Error: doesnt recognize directive : ' + directiveName);
          return;
        }

        var deferred = $q.defer();
        var directiveFile = _directivesFileMap[directiveName];

        // download the javascript file
        var script = document.createElement('script');
        script.src = directiveFile;
        script.onload = function() {
            $rootScope.$apply(deferred.resolve);
        };
        document.getElementsByTagName('head')[0].appendChild(script);

        return deferred.promise;
    };

    return {
        load: _load
    };

  }]);

  app.service('DirectivesFileMapper', function() {

    var _mapper = {
        LazyDirectiveTest: './lazy-directive-test.js'
    };

    function _get(directiveName) {
        return _mapper[directiveName];
    }

    return {
        get: _get
    };

  });

  app.service('LazyDirectiveLoader', ['$rootScope', '$q', '$compile', 'DirectivesFileMapper', function($rootScope, $q, $compile, DirectivesFileMapper) {

    var _directivesLoaded = [],
     _modulesLoaded = [];

    var _load = function(directiveName) {
        // make sure the directive exists in the mapper
        var directiveFile = DirectivesFileMapper.get(directiveName);
        if (!directiveFile) {
            console.log('Error: Cant find directive in mapper : ' + directiveName);
            return;
        }

        var deferred = $q.defer();

        // check if we loaded this directive already
        if (_directivesLoaded.indexOf(directiveName) >= 0) {
            deferred.resolve();
            return deferred.promise;
        }

        // Load the directive javascript file we need
        // TODO: export this part to a separate service
        var script = document.createElement('script');
        script.src = directiveFile;
        script.onload = function() {
            _modulesLoaded.push(directiveName);
            $rootScope.$apply(deferred.resolve);
        };
        document.getElementsByTagName('head')[0].appendChild(script);

        return deferred.promise;
    };

    // You can use this method to dynamically compile the loaded directive
    var _loadDirective = function(directiveName, attrsMap) {
        var elementName = _snakeCase(directiveName);
        var element = '<' + elementName + '></' + elementName + '>';
        // TODO: convert `attrsMap` to attributes on the directive element tag
        return $compile(element)($rootScope);
    };

    // a helper method to translate a camel case name to snake case
    // I took this directly from the angular js libraries so i know
    // it's done the same way exactly!
    var _snakeCase = function(string) {
        var SNAKE_CASE_REGEXP = /[A-Z]/g;
        separator = separator || '-';
        return name.replace(SNAKE_CASE_REGEXP, function(letter, pos) {
            return (pos ? separator : '') + letter.toLowerCase();
        });
    };

    return {
        load: _load,
        loadDirective: _loadDirective
    };

  }]);



  app.controller('AppMainCtrl', appMainCtrl);

  return app;

});
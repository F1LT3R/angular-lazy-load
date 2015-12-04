define([
  'core/ng-app',
  'core/ng-settings-core',
  require.dev ? 'core/ng-settings-dev' : '',
], function (app, settings_core, settings_dev) {


  console.log(require.dev);
  console.log(settings_dev);


  // console.log(settings_dev);

  return app.constant('settings', angular.extend(settings_core, settings_dev));

});
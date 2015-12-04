define([

  // Angular App already bootstrapped
  'core/ng-app',

  'core/ng-settings-core',

  // Conditional load development settings
  require.settings.dev ? 'core/ng-settings-dev' : '',

], function (app, settings_core, settings_dev) {

  // Set constants for the Angular App
  return app.constant('settings', angular.extend(settings_core, settings_dev));

});
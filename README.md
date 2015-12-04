# Angular LazyLoad CookieCutter

An AngularJS + Ui-Router + RequireJS cookie cutter: for creating web-applications that fetches controllers, modules and CSS, after Angular has been bootstrapped, resolving their dependencies as the route changes.

Read more about the [lazy-loading software design pattern](https://en.wikipedia.org/wiki/Lazy_loading) on Wikipedia.


## Definitions

### Ng-Files

All files prefixed with `ng-` contain core Angular code.

### Core Module

The Definition of a Core Module is two-fold:

 1. A Module that the Angular App depends upon to be bootstrapped. A Core Module can be a Directive, a Controller or even a Configuration file.
 2. A Module that is used in every/many view(s) of the application. Eg: an API module that handles communication between the server and the client.



Research:

 - [Lazy Loading in AngularJS](http://ify.io/lazy-loading-in-angularjs/) - Ifeanyi Isitor
 - [angularAMD](http://marcoslin.github.io/angularAMD/) - Marcoslin
 - [Dynamically Loading Controllers & Views With AngularJS & RequireJS](http://weblogs.asp.net/dwahlin/dynamically-loading-controllers-and-views-with-angularjs-and-requirejs) - Dan Wahlin
 - [Dynamically Loading Directives in AngularJS the Easy Way](http://www.debuggerstepthrough.com/2014/11/dynamically-loading-directives-in.html]) - Gilly Barr
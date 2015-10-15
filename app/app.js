define([
  'mainConfig',
  'router'
],
  function (myApp, Router) {
    var initialize = function () {
      myApp.router = new Router('',{
          createTrailingSlashRoutes: true
        });
      Backbone.history.start({root:'/'});
    };
    return {
        init: initialize
    };
});

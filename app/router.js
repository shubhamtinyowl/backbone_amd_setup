define([
  'underscore',
  'jquery',
  'backbone',
  'helpers'
], function(_, $, Backbone, H) {
  var Router = Backbone.Router.extend({
    initialize: function() {
    },

    // require_router: function(prefix, main_path) {
    //   var router_path = main_path.split('/').slice(0, -1).join('/') + '/router';
    //   require([main_path], function() {
    //     require([router_path], function(Router) {
    //       var router = new Router(prefix, { createTrailingSlashRoutes: true });
    //     });
    //     console.debug(prefix, 'router initialized');
    //   });
    // },

    // routes: {
    //   'user': user
    // }

    routes: {
      'user': 'user'
    },

    user: function() {
      // require(['user/router'], function(Router) {
      //   debugger
      //   var router = new Router();
      //   router.on('');
      // })
      H.require_router('user', 'user/main');
    }
    // xyz: function(route, name, path) {
    //   require([path], function(module) {
    //     module.initialize();
    //   })
    // }

    // user: function() {
    //
    //   // Backbone.history.navigate(this.modules.user)
    // }

  });

  return Router;
});

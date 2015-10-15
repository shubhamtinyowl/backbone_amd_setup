define([], function() {

  var H = {
    require_router: function(prefix, main_path) {
      var router_path = main_path.split('/').slice(0, -1).join('/') + '/router';
      require([main_path], function() {
        require([router_path], function(Router) {
          var router = new Router(prefix, { createTrailingSlashRoutes: true });
        });
        console.debug(prefix, 'router initialized');
      });
    },

    require_render_view: function(path, options) {
      require([path], function(View) {
        var view = new View(options||{});
        view.render();
      });
    }
  }
  return H;
});

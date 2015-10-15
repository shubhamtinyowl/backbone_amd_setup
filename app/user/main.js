define([
  'user/config',
  'user/router',
  'user/apps',
],
function(config, Router , apps ){
     var initialize = function(){   
      apps.initialize()
      new Router('user',{createTrailingSlashRoutes: true});
    }
    return { 
        initialize: initialize
    };  
});
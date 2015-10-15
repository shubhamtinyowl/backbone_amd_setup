require.config({
  // make components more sensible
  // expose jquery
  paths: {
    'backbone':           '../bower_components/backbone/backbone-min',
    'components':         '../bower_components',
    'helpers':            'utilities/helpers',
    'jquery':             '../bower_components/jquery/dist/jquery',
    'underscore':         '../node_modules/lodash/lodash.min',
    'subrouter':          'utilities/backbone-subroute',
    'Template':           'templates'
  },
  use: {
    backbone: {
      deps: ["use!underscore", "jquery"],
      attach: "Backbone"
    },

    underscore: {
      attach: "_"
    }
  }
});

require([

  // Load our app module and pass it to our definition function
  'app',
], function(App){
  // The "app" dependency is passed in as "App"
  App.init();
});

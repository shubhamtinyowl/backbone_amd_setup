define([
    'jquery',
    'underscore',
    'backbone',
    'subrouter',
    'helpers'
  ],
  function($, _, Backbone, subrouter, H) {
    'use strict';
    var Router = Backbone.SubRoute.extend({
      initialize: function() {
      },
      routes: {
        "": 'index',
      },

      index:function(){
        debugger
        H.require_render_view('user/views/user');
      },

    });
    return Router;
  });

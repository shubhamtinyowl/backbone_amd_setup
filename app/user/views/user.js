define([
    'underscore',
    'jquery',
    'backbone',
    'helpers',
    'Template'
  ],
  function (_, $, Backbone, H) {
    'use strict';
    var View = Backbone.View.extend({

      el: '#page',
      template: JST['templates/user.ejs'],

      initialize: function (options) {
        this.options = options || {};
      },

      render: function () {
        var temp = this.template(this.options);
        this.$el.html(temp);
        this.load_plugins();
      },

      load_plugins: function () {

      }
    });
    return View;
  });

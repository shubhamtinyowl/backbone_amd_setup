define([
    'underscore',
    'jquery',
    'backbone'
  ],
  function(_, $, Backbone) {
    'use strict';
    var Model = Backbone.Model.extend({

      urlRoot: '',

      initialize: function() {},
      defaults: {},
      validate: function(attrs, options) {

      },
    });
    return Model;
  });
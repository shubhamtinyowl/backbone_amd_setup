define([
    'underscore',
    'jquery',
    'backbone',
  ],
  function(_, $, Backbone) {
    'use strict';
    var collection = Backbone.Collection.extend({
      url: '',
      initialize: function() {},

    });
    return collection;
  });
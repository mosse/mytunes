var EnqueueButtonView = Backbone.View.extend({

  template: _.template('<i class="fa fa-plus-square-o"></i>'),

  events: {
    'click': function(e) {
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.addClass('inline').html(this.template());
  }

});

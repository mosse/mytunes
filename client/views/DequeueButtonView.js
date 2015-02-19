var DequeueButtonView = Backbone.View.extend({

  template: _.template('<i class="fa fa-minus-square-o"></i>'),

  events: {
    'click': function() {
      this.model.dequeue();
    }
  },

  render: function(){
    return this.$el.addClass('inline').html(this.template());
  }

});

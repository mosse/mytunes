var PlayButtonView = Backbone.View.extend({

  template: _.template('<i class="fa fa-play-circle-o inline"></i>'),

  events: {
    'click': function() {
      this.model.play();
    }
  },

  render: function(){
    return this.$el.addClass('inline').html(this.template());
  }

});

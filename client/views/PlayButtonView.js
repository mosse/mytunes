var PlayButtonView = Backbone.View.extend({

  template: _.template('<i class="fa fa-play-circle-o"></i>'),

  events: {
    'click': function(e) {
      console.log(e);
      this.model.play();
    }
  },

  render: function(){
    return this.$el.html(this.template());
  }

});

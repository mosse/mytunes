// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',
  //<i class="fa fa-plus-square-o"></i>
  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  // events: {
  //   'click': function(e) {
  //     console.log(e);
  //     this.model.play();
  //   }
  // },

  render: function(){
    console.log(this);
    return this.$el.html(this.template(this.model.attributes))
    .prepend(new PlayButtonView({model: this.model}).render());

    }


});

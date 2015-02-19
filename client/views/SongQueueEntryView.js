// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',
  className: 'queue',

  template: _.template('<td class="artist">(<%= artist %>)</td><td class="title"><%= title %></td>'),

  render: function(){
    return this.$el.html(this.template(this.model.attributes))
    .prepend(new DequeueButtonView({model: this.model}).render())
    .prepend(new PlayButtonView({model: this.model}).render());
  }
});

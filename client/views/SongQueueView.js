// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();

    this.collection.on('add', function(model){
      this.render();
    }, this);

    this.collection.on('remove', function(model){
      this.render();
    }, this);

    this.collection.on('ended', function(model){
      console.log('this is the end...');
    })

  },



  render: function() {

    this.$el.children().detach();

    return this.$el.html('<th class="queue heading">Playlist</th>').append(
      this.collection.map(function(song){
        console.log('should render the entries');
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});

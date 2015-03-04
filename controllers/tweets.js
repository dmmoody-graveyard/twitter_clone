Twitter.TweetsController = Ember.ArrayController.extend({
  sortProperties: ['date'],
  sortAscending: false,
  itemController: 'tweet',
  actions: {
    saveTweet: function() {
      var date = new Date().toLocaleString();
      tweets.addObject({ date: date, id: 0, message: this.message });
    },
  }

});


Twitter.TweetController = Ember.ObjectController.extend({
  isShowing: false,
  actions:{
      showDate: function () {
        if (this.isShowing) {
          this.set('isShowing', false);
        } else {
          this.set('isShowing', true);
        }
      }
    }
});

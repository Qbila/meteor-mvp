Template.newsFeed.helpers({
  comments : function(newsFeed) {
    return Comments.find({storyId : newsFeed._id});
  }
});

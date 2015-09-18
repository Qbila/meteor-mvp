Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  // waitOn: function(){ return Meteor.subscribe('newsFeed'); }
});

Router.map(function () {
  this.route('home', {path : '/'});

  this.route('act', {path : 'act'});
/*
  this.route('newsPage', {
    path: 'news/:_id',
    data: function() { return NewsFeed.findOne(this.params._id); }
  });

  this.route('newsSubmit', {
    path: '/submit'
  })
  */
});

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  // waitOn: function(){ return Meteor.subscribe('newsFeed'); }
});

Router.map(function () {
  this.route('home', {
      path : '/',
      layoutTemplate : 'homeLayout'
  });

  this.route('act', {
    path : 'act',
    onBeforeAction : function(){
      Template.contextTitle.helpers({
        contextTitle: 'Act',
        contextInfo: 'Actionable information for you'
      });

      document.title = 'Act - Actionable information for you - Qbila';

      this.next();
    }
  });


  this.route('statusNImpact', {
    path : 'act/status',
    onBeforeAction : function(){
      Template.contextTitle.helpers({
        contextTitle: 'Act',
        contextInfo: 'Actionable information for you'
      });

      document.title = 'Status and Impact - Act - Qbila';

      this.next();
    }
  });

  this.route('localIssues', {
    path : 'act/local',
    onBeforeAction : function(){
      Template.navigation.helpers({
        contextTitle: 'Local Issues',
        contextInfo: 'Priority issues around you'
      });

      document.title = 'Local Issues - Act - Qbila';

      this.next();
    }
  });

  this.route('services', {
    path : 'act/services',
    onBeforeAction : function(){
      Template.navigation.helpers({
        contextTitle: 'Services',
        contextInfo: ''
      });

      document.title = 'Services - Act - Qbila';

      this.next();
    }
  });


  this.route('know', {
    path : 'know',

    onBeforeAction : function(){
      Template.contextTitle.helpers({
        contextTitle: 'Know',
        contextInfo: 'Awareness of your locality'
      });

      document.title = 'Know - Awareness of your regions - Qbila';

      this.next();
    }
  });

  this.route('city', {
    path : 'city',

    onBeforeAction : function(){
      Template.contextTitle.helpers({
        contextTitle: 'City',
        contextInfo: 'About your city'
      });

      document.title = 'City - Qbila';

      this.next();
    }
  });

  this.route('org', {
    path : 'org',

    onBeforeAction : function(){
      Template.contextTitle.helpers({
        contextTitle: 'Organisation',
        contextInfo: 'Government Organisation'
      });

      document.title = 'Organisation - Qbila';

      this.next();
    }
  });

});

/*
Handlebars.registerHelper("TitleAndContext", function(title) {
    if(title) {
        document.title = title;
    } else {
        document.title = "Your default title";
    }
});
*/

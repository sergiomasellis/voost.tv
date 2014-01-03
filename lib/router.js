Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
    waitOn: function() { return Meteor.subscribe('streams'); }
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('streamsList', {path: '/streams'});
  this.route('streamPage', {
      path: '/streams/:_id',
      data: function() { return Streams.findOne(this.params._id); }
   });
  this.route('streamSubmit', {
      path: '/live'
   });
});
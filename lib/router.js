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
      data: function() {
        var chatRoom = "voostChat-"+this.params._id;
        // Session.set('chatworks-chatroom', chatRoom);

        // console.log(ChatworksUsers);
        Session.set('chatworksRoom', chatRoom);
        chatworksMessagesHandle.changeRoom(chatRoom);
        return Streams.findOne(this.params._id);
      }
   });
  this.route('streamSubmit', {
      path: '/dashboard',
      onBeforeAction: function () {

        if(Meteor.user() === null){
          Router.go('/');
        }
    }
   });
});

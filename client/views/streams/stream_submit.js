Template.streamSubmit.helpers({
  stream_key: function(param) {
  	return Meteor.user().stream_key;
  },
  stream_url: function(){
	return "rtmp://rtpm.voost.tv/live/"+Meteor.user().stream_key;
  },
  currentTitle: function(){
  	 if(Streams.find({userName: Meteor.user().username}).count() == 1){
  	 	return Streams.findOne({userName: Meteor.user().username}).title;
  	 }else{
  	 	return;
  	 }
  },
  currentDesc: function(){
  	 if(Streams.find({userName: Meteor.user().username}).count() == 1){
  	 	return Streams.findOne({userName: Meteor.user().username}).desc;
  	 }else{
  	 	return;
  	 }
  },
  currentTags: function(){
  	 if(Streams.find({userName: Meteor.user().username}).count() == 1){
  	 	return Streams.findOne({userName: Meteor.user().username}).tag;
  	 }else{
  	 	return;
  	 }
  }
});


Template.streamSubmit.events({
  'click button': function(e) {
    e.preventDefault();

    if(Streams.find({userName: Meteor.user().username}).count() != 1){



    var url = "../../../"+Meteor.user().username
    var stream_url = "rtmp://rtpm.voost.tv/live/"+Meteor.user().stream_key;

    var userName = (Meteor.user().username) ? Meteor.user().username : Meteor.user().profile.name;

    var stream = {
      title: $("#title").val(),
      desc: $("#desc").val(),
      userName: userName,
      url: url,
      tag: $("#tags").val(),
      thumbnail: "/img/avatar.png",
      profileImg: "https://lh6.googleusercontent.com/-3OS1jxu6R6s/AAAAAAAAAAI/AAAAAAAAAHk/wvK-kwYovCw/s46-c-k-no/photo.jpg",
      heroStreamUrl: stream_url
    }

    ChatworksRooms.insert({
      room: "canvasChat-" + Meteor.user().stream_key
    });

    stream._id = Streams.insert(stream);

    Session.set('stream_id', stream._id);

    }else{

    var userName = (Meteor.user().username) ? Meteor.user().username : Meteor.user().profile.name;

    var streamProperties = {
      title: $("#title").val(),
      desc: $("#desc").val(),
      tags: $("#tags").val(),
      userName: userName
      };

      var stream_id = Streams.findOne({userName: userName})._id;


      Streams.update(stream_id , {$set: streamProperties}, function(error) {
            if (error) {
              // display the error to the user
              throwError(error.reason);
            } else {
              Router.go('streamPage', {_id: stream_id});
            }
          });

    }
    Router.go('streamPage', stream);
  }
});

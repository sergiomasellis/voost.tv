Template.streamSubmit.helpers({
  stream_key: function(param) {
  	return Meteor.user().stream_key;
  },
  stream_url: function(){
	return "rtmp://54.221.226.33/live/"+Meteor.user().stream_key;
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
    var stream_url = "rtmp://54.221.226.33/live/"+Meteor.user().stream_key;

    var stream = {
      title: $("#title").val(),
      desc: $("#desc").val(),
      userName: Meteor.user().username,
      url: url,
      tag: $("#tags").val(),
      thumbnail: "http://wbpreview.com/previews/WB06M01T2/img/gallery/gallery-img-1-4col.jpg",
      profileImg: "https://lh6.googleusercontent.com/-3OS1jxu6R6s/AAAAAAAAAAI/AAAAAAAAAHk/wvK-kwYovCw/s46-c-k-no/photo.jpg",
      heroStreamUrl: stream_url
    }

    
    stream._id = Streams.insert(stream);
    
    Session.set('stream_id', stream._id);
    
    }else{
    
    var streamProperties = {
      title: $("#title").val(),
      desc: $("#desc").val(),
      tags: $("#tags").val()
      };
      
      var stream_id = Streams.findOne({userName: Meteor.user().username})._id;
      
      
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


Template.streamSubmit.rendered=function(){
    var initializeOnlyOnce=_.once(function(){
        var streamUrl = $("#preview").val();
        jwplayer('preview_stream').setup({
          width: "100%",
          height: "360",
          stretching: "fill",
          primary: "flash",
          autostart: "false",
          sources:[{file: streamUrl}],
          logo: {
                  file: 'http://localhost:3000/img/logo.png',
                  link: 'http://locahost:3000/'
          }
        });
    });
    initializeOnlyOnce();
};
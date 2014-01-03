Template.streamItem.helpers({
  setTitle: function(param) {
  	document.title = "Canvas.tv | "+param;
	return;
  },
  stream_url: function(){
	return "rtmp://54.221.226.33/live/"+Meteor.user().stream_key;
  }
});

Template.streamItem.rendered=function(){
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
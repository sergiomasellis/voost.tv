var streamsData = [
  {
    title: 'Rails Developer Extraordinaire!',
    userName: 'NeedSomeBread',
    tag: "Ruby on Rails",
    desc: "Recently representing Team USA in the Battlefield 4 Europe vs USA Showdown, \"NeedSomeBread\" is one of the top scout helicopter pilots in Battlefield. Come check out his high quality 1080p 60fps stream as he uses the helicopter to run down his opponents.",
    url: 'http://sachagreif.com/introducing-telescope/',
    profileImg: "https://lh6.googleusercontent.com/-3OS1jxu6R6s/AAAAAAAAAAI/AAAAAAAAAHk/wvK-kwYovCw/s46-c-k-no/photo.jpg",
    heroStreamUrl: "rtmp://54.221.226.33/live/NeedSomeBread"
  }
];

Template.streamsHero.helpers({
  streams: function(){
  	return Streams.findOne();
  }
});

Template.streamsHero.rendered=function(){
    var initializeOnlyOnce=_.once(function(){
        var streamUrl = $("#hero_stream_url").val();
        jwplayer('hero_stream').setup({
          width: "100%",
          height: "360",
          stretching: "fill",
          primary: "flash",
          autostart: "true",
          sources:[{file: streamUrl}],
          logo: {
                  file: 'http://localhost:3000/img/logo.png',
                  link: 'http://locahost:3000/'
          }
        });
    });
    initializeOnlyOnce();
};
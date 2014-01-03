Template.streamsList.helpers({
  streams: function () {
  	return	Streams.find();
  }
});
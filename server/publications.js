Meteor.publish('streams', function() {
  return Streams.find();
});

Meteor.publish("userData", function () {
  return Meteor.users.find({_id: this.userId},
                           {fields: {'stream_key': 1}});
});
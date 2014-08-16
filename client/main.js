Meteor.autosubscribe(function () {
	Meteor.subscribe('streams');
	Meteor.subscribe("settings");
  Meteor.subscribe("userData");

});

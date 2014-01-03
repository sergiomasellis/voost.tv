Meteor.autosubscribe(function () {
	Meteor.subscribe('streams');
    Meteor.subscribe("userData");
});
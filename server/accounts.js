Accounts.onCreateUser(function(options, user) {
	var stream_key = user.username;
	user.stream_key = CryptoJS.MD5(stream_key).toString();

	// console.log(user, options);

  // We still want the default hook's 'profile' behavior.
  if (options.profile) user.profile = options.profile;
  return user;
});

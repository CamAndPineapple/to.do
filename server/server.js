console.log("Grab a cup of coffee and enjoy");

// Publish all tasks to server
Meteor.publish("tasks", function () {
	return Tasks.find({
		$or: [
			{ private: {$ne: true} },
			{ owner: this.userId },
		]
	});
});
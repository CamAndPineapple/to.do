console.log("Server check - Running");

// Publish all tasks to server
Meteor.publish("tasks", function () {
	return Tasks.find({
		$or: [
			{ private: {$ne: true} },
			{ owner: this.userId },
		]
	});
});
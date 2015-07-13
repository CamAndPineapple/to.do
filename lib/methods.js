Meteor.methods({
	addTask: function(text) {
		// user is logged in before inserting task
		if (!Meteor.userId()) {
			throw new Meteor.Error("user not authorized");
		}

		Tasks.insert({
			text: text,
			createdAt: new Date(),
			owner: Meteor.userId(),
			username: Meteor.user().username
		});
	},
	deleteTask: function(taskId) {
		Tasks.remove(taskId);
	},
	setChecked: function(taskId, setChecked) {
		Tasks.update(taskId, {
			$set: {
				checked: setChecked
			}
		});
	}
});
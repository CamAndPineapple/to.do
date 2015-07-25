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

		var task = Tasks.findOne(taskId);
		if (task.private && task.owner !== Meteor.userId()) {
			throw new Meteor.Error("not-authorized");
		}
		
		Tasks.remove(taskId);
	},

	setChecked: function(taskId, setChecked) {

		var task = Tasks.findOne(taskId);
		if (task.private && task.owner !== Meteor.userId()) {
			throw new Meteor.Error("not-authorized");
		}

		Tasks.update(taskId, {
			$set: {
				checked: setChecked
			}
		});
	},

	setPrivate: function(taskId, setToPrivate) {
		var task = Tasks.findOne(taskId);

		// only task owner can make a task private
		if (task.owner !== Meteor.userId()) {
			throw new Meteor.Error("not_authorized");
		}

		Tasks.update(taskId, {
			$set: {
				private: setToPrivate
			}
		});
	}

});
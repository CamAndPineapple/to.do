 Template.body.helpers({
    tasks: function() {
    	if (Session.get("hideCompleted")) {
    		// if hide completed is checked, filter tasks
	    	return Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
    	} else {
    		// return all tasks
    		return Tasks.find({}, {sort: {createdAt: -1}});
    	}
    },

    hideCompleted: function() {
    	return Session.get("hideCompleted");
    },

    completedCount: function () {
    	return Tasks.find({checked: {$ne: false}}).count();
    }
  });


Tasks = new Mongo.Collection("tasks");


if (Meteor.isClient) {

  Template.body.helpers({
    tasks: function() {
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.body.events({
    "submit .new-task": function (event) {
      // called when new task form is submitted
      console.log(event);
      var text = event.target.text.value;


      Tasks.insert({
        text: text,
        createdAt: new Date()
      });

      // clear form 
      event.target.text.value = "";

      // prevent default form submit behavior
      return false;

    }
  });

  Template.task.events({
    "click .toggle-checked": function() {
      // set the checked property to the opposite of its current value
      Tasks.update(this._id, {$set: {checked: ! this.checked}});
    },

    "click .delete": function() {
      Tasks.remove(this._id);
    }
  });



}

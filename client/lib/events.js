  Template.body.events({
    "submit .new-task": function(event) {
      // called when new task form is submitted
      var text = event.target.text.value;


      Meteor.call("addTask", text);

      // clear form 
      event.target.text.value = "";

      // prevent default form submit behavior
      return false;

    },

    "change .hide-completed input": function(event) {
      Session.set("hideCompleted", event.target.checked);
    },

    "click #login-button": function(event) {
      if (!$('#list-container').is(":visible") && !$('#signup-form').is(":visible")) {
        $('#list-container').fadeIn('fast');
        $('#login-form').fadeOut('fast');
      } else if ($('#signup-form').is(":visible")) {
        $('#signup-form').fadeOut('fast');
        $('#login-form').fadeIn('fast');
      } else {
        $("#list-container").fadeOut('fast');
        $('#login-form').fadeIn('fast');
        $('#signup-form').fadeOut('fast');
      }
    },

    "click #signup-button": function(event) {
       if (!$('#list-container').is(":visible") && !$('#login-form').is(":visible")) {
        $('#list-container').fadeIn('fast');
        $('#signup-form').fadeOut('fast');
      } else if ($('#login-form').is(":visible")) {
        $('#login-form').fadeOut('fast');
        $('#signup-form').fadeIn('fast');
      } else {
        $("#list-container").fadeOut('fast');
        $('#signup-form').fadeIn('fast');
        $('#login-form').fadeOut('fast');
      }
    },



  });

  Template.task.events({
    "click .toggle-checked": function() {
      // set the checked property to the opposite of its current value
      Meteor.call("setChecked", this._id, !this.checked);
    },

    "click .delete": function() {
      Meteor.call("deleteTask", this._id);
    },

    "click .toggle-private": function() {
      Meteor.call("setPrivate", this._id, !this.private);
    }

  });
  Template.body.events({
    "submit .new-task": function(event) {
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

    },

    "change .hide-completed input": function(event) {
      Session.set("hideCompleted", event.target.checked);
    },

    "click #login-button": function() {
      $(".list-container").toggleClass('hidden');
    }


  });

  Template.task.events({
    "click .toggle-checked": function() {
      // set the checked property to the opposite of its current value
      Tasks.update(this._id, {
        $set: {
          checked: !this.checked
        }
      });
    },

    "click .delete": function() {
      Tasks.remove(this._id);
    }

  });
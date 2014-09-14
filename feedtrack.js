if (Meteor.isClient) {

    Template.updateFeedbackForm.helpers({
      editingDoc: function editingDocHelper() {
        return Feedback.findOne({_id: Session.get("selectedDocId")});
      }
    });

    Template.showFeedback.helpers({
        allFeedback: function allFeedbackHelper() {
            return Feedback.find().fetch();
        }
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}

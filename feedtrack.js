if (Meteor.isClient) {

    Template.updateFeedbackForm.helpers({
      editingDoc: function editingDocHelper() {
        return Feedback.findOne({_id: Session.get("selectedDocId")});
      }
    });

    Template.showFeedback.helpers({
        allFeedback: function allFeedbackHelper() {
            return Feedback.find({accountId:Meteor.userId()}).fetch();
        }
    });

    Template.loginOrDashboard.helpers({
        loggedIn: function loggedInHelper() {
            return _.isObject(Meteor.user());
        },
        username: function userNameHelper() {
            return Meteor.user().emails[0].address;
        }
    });

    Template.loginOrDashboard.events({
        'click #logout': function() {
            Meteor.logout();
        }
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}

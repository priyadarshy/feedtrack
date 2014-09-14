Feedback = new Meteor.Collection("feedback")

Feedback.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: "User's Name",
        optional: true
    },
    email: {
        type: String,
        label: "E-mail Address",
        optional: true
    },
    contactNext: {
        type: Date,
        label: "Contact Next at",
        optional: true
    },
    userId: {
        type: String,
        label: "userId",
        optional: true
    },
    content: {
        type: String,
        label: "Feedback"
    },
    tags: {
        type: [String],
        label: "Tags"
    }
}));



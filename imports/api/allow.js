import { Meteor } from 'meteor/meteor'

function adminUser(userId) {
    if (userId) {
        var adminUser = Meteor.users.findOne({ _id: userId })
        return userId === adminUser._id && adminUser.profile.role === 'admin'
    } else {
        return false
    }
}

Meteor.users.allow({
    insert: function(userId, doc) {
        return adminUser(userId) || (userId && doc.owner === userId)
    },
    update: function(userId, doc) {
        return adminUser(userId) || doc.owner === userId
    },
    remove: function(userId, doc) {
        return adminUser(userId) || doc.owner === userId
    },
    fetch: ['owner'],
})

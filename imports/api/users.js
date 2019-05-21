/* eslint-disable prettier/prettier */
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

if (Meteor.isServer) {
    Meteor.publish('allUsers', () => {
        return Meteor.users.find({})
    })
    Meteor.publish('user._id', userId => {
        check(userId, String)
        return Meteor.users.find({_id: userId})
    })
    Meteor.methods({
        'user.avatar'(userId, avatar) {
            check(userId, String)
            check(avatar, String)
            Meteor.users.update(
                { _id: userId },
                {
                    $set: {
                        'profile.avatar': avatar
                    }
                }
            );
        },
    })
}
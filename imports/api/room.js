/* eslint-disable prettier/prettier */
import { Mongo } from 'meteor/mongo'
import { check, Match } from 'meteor/check'
import { Meteor } from 'meteor/meteor'

export default (Room = new Mongo.Collection('room'))

if (Meteor.isServer) {
    Meteor.publish('rooms', () => {
        return Room.find({})
    })
    Meteor.methods({
        'room.add'(room) {
            check(room, Match.Any)
            check(room.name, String)
            // if (!Meteor.userId()) {
            //     throw new Meteor.Error('not-authorized')
            // }
            Room.insert({
                name: room.name,
                usersjoined: [], 
                createdAt: new Date(),
            })
        },
    })
}
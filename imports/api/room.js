/* eslint-disable prettier/prettier */
import { Mongo } from 'meteor/mongo'
import { check, Match } from 'meteor/check'
import { Meteor } from 'meteor/meteor'

export default (Room = new Mongo.Collection('room'))

if (Meteor.isServer) {
    Meteor.publish('rooms', () => {
        return Room.find({})
    })
    Meteor.publish('room._id', rommId => {
        check(rommId, String)
        return Room.find({_id: rommId})
    })
    Meteor.methods({
        'room.add'(room) {
            check(room, Match.Any)
            check(room.name, String)
            if (!Meteor.userId()) {
                throw new Meteor.Error('not-authorized')
            }
            Room.insert({
                name: room.name, // nom de la partie
                current: null,
                displayAnswers: false,
                usersjoined: [],
                question: [],
                // question: [{
                //     id: '1234567890',
                //     displayedAt: 123456789,
                //     title: 'ceci est un titre',
                //     description: 'ceci est un titre',
                //     answers: [{
                //         id: 'yhaMX9RBgTtDfR4BT',
                //         response: 1,
                //         answersAt: 1234567890765,
                //     }, ],
                // }, ],
            })
        },
        'room.page'(rommId, pageNum, result){
            Room.update({
                _id: rommId
            }, {
                $set: {
                    current: pageNum,
                    displayAnswers: result
                }
            })
        }
    })
}
import React from 'react'
import RoomApi from '../../../../api/room'
import Spinner from '../../../components/Loader/Spinner'
import { withTracker } from 'meteor/react-meteor-data'
import { withStyles } from '@material-ui/core'
import RoomInfoStyle from './RoomInfoStyle'
import ReadyPage from './ReadyPage'
import EndPage from './EndPage'
import QuestionPage from './QuestionPage'
import ResultPage from './ResultPage'
import { compose } from 'recompose'

const RoomStart = props => {
    const { loading, rooms, classes } = props

    if (loading && rooms && rooms.length === 1) {
        const room = rooms[0]
        const current = room.current
        if (!current && current !== 0) {
            return <ReadyPage roomId={room._id} />
        } else if (current === 'end') {
            return <EndPage roomId={room._id} />
        } else {
            if (room.displayAnswers) {
                return (
                    <ResultPage
                        name={room.name}
                        displayAnswers={room.displayAnswers}
                        usersjoined={room.usersjoined}
                        roomId={room._id}
                        question={room.question[current]}
                        questionNumber={room.question.length}
                        current={current}
                    />
                )
            } else {
                return (
                    <QuestionPage
                        usersjoined={room.usersjoined}
                        roomId={room._id}
                        question={room.question[current]}
                        questionNumber={room.question.length}
                        current={current}
                    />
                )
            }
        }
    } else {
        return <Spinner />
    }
}

export default compose(
    withTracker(props => {
        const roomId = props.match.params.roomId
        const load = Meteor.subscribe('room._id', roomId)
        return {
            loading: load.ready(),
            rooms: RoomApi.find({ _id: roomId }).fetch(),
        }
    }),
    withStyles(RoomInfoStyle)
)(RoomStart)

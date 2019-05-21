import React from 'react'
import RoomApi from '../../../../api/room'
import Spinner from '../../../components/Loader/Spinner'
import { withTracker } from 'meteor/react-meteor-data'
import Button from '../../../components/CustomButtons/Button'
import Title from '../../../components/Typography/Title'
import Alert from '../../../components/Alert/Alert'
import UserCard from './UserCard'
import QuestionCard from './QuestionCard'
import { withStyles } from '@material-ui/core'
import RoomInfoStyle from './RoomInfoStyle'
import ReadyPage from './ReadyPage'
import QuestionPage from './QuestionPage'
import { compose } from 'recompose'

const RoomStart = props => {
    const { loading, rooms, classes, match } = props

    if (loading && rooms && rooms.length === 1) {
        const questionId = match.params.questionId
        const room = rooms[0]
        if (questionId === 'start') {
            return <ReadyPage />
        }
        return (
            <QuestionPage
                name={room.name}
                question={room.question[questionId]}
            />
        )
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

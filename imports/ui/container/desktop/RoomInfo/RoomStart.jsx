import React from 'react'
import RoomApi from '../../../../api/room'
import Spinner from '../../../components/Loader/Spinner'
import { withTracker } from 'meteor/react-meteor-data'
import Button from '../../../components/CustomButtons/Button'
import Title from '../../../components/Typography/Title'
import UserCard from './UserCard'
import QuestionCard from './QuestionCard'
import { withStyles } from '@material-ui/core'
import RoomInfoStyle from './RoomInfoStyle'
import { compose } from 'recompose'
import { Link } from 'react-router-dom'

const RoomStart = props => {
    const { loading, rooms, classes } = props

    if (loading && rooms && rooms.length === 1) {
        const room = rooms[0]
        return (
            <div>
                <Title centered>{room.name}</Title>
                <Title centered>{room.usersjoined.length}</Title>
                <div className={classes.usersPart}>
                    {room.usersjoined.map(userId => (
                        <UserCard key={`user/${userId}`} userId={userId} />
                    ))}
                </div>
                <Link to={`${room._id}/start`}>
                    <Button centered color="primary">
                        Start Game !
                    </Button>
                </Link>
            </div>
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

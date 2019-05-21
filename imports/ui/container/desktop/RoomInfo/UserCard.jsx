import React from 'react'
import Spinner from '../../../components/Loader/Spinner'
import { withTracker } from 'meteor/react-meteor-data'
import { Avatar } from '@material-ui/core'
import { withStyles } from '@material-ui/core'
import RoomInfoStyle from './RoomInfoStyle'
import { compose } from 'recompose'

const UserCard = props => {
    const { loading, users } = props

    if (loading && users && users.length === 1) {
        const user = users[0]
        return (
            <div>
                <Avatar src={user.profile.avatar} />
            </div>
        )
    } else {
        return <Spinner />
    }
}

export default compose(
    withTracker(props => {
        const load = Meteor.subscribe('user._id', props.userId)
        return {
            loading: load.ready(),
            users: Meteor.users.find({ _id: props.userId }).fetch(),
        }
    }),
    withStyles(RoomInfoStyle)
)(UserCard)

import React, { Fragment } from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import Spinner from '../../../components/Loader/Spinner';
import { Avatar } from '@material-ui/core';

const UserCard = props => {
    const { users, loading } = props
    console.log(props)
    if(users && users.length === 1 && loading){
        const user = users[0]
        return (
            <Fragment>
                <div>{user.profile.email}</div>
                <Avatar src={user.profile.avatar} />
            </Fragment>
        )
    }
    return <Spinner />
}

export default withTracker(props => {
    const load = Meteor.subscribe('user._id', props.userId)
    return {
        loading: load.ready(),
        users: Meteor.users.find({_id: props.userId}).fetch(),
    }
})(UserCard)
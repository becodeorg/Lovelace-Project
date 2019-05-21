import React from 'react'
import RoomApi from '../../../../api/room'
import Spinner from '../../../components/Loader/Spinner'
import { withTracker } from 'meteor/react-meteor-data'
import Button from '../../../components/CustomButtons/Button'
import Alert from '../../../components/Alert/Alert'

const RoomInfo = props => {
    const { loading, rooms } = props

    return (
        <div>
            <h2>Room</h2>
            <form onSubmit={e => handleAddRoom(e)}>
                <input type="text" name="roomName" />
                <Button color="primary" type="submit">
                    Submit
                </Button>
            </form>
            {loading ? <div>test</div> : <Spinner />}
        </div>
    )
}

export default withTracker(() => {
    const load = Meteor.subscribe('rooms')
    return {
        loading: load.ready(),
        rooms: RoomApi.find({}).fetch(),
    }
})(RoomInfo)

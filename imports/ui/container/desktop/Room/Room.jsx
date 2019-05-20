import React from 'react'
import RoomApi from '../../../../api/room'
import Spinner from '../../../components/Loader/Spinner'
import { withTracker } from 'meteor/react-meteor-data'
import Button from '../../../components/CustomButtons/Button'
import Alert from '../../../components/Alert/Alert'

const Room = props => {
    const { loading, rooms } = props

    const handleAddRoom = e => {
        e.preventDefault()
        const room = {
            name: e.target.roomName.value,
        }
        console.log(room)
        Meteor.call('room.add', room, err => {
            if (err) {
                Alert({
                    query: 'Swal',
                    type: 'error',
                    title: 'Oops...',
                    text: err.reason,
                })
            } else {
                Alert({ query: 'Toast', type: 'success', title: 'Updated !' })
            }
        })
    }
    console.log(props)
    return (
        <div>
            <h2>Room</h2>
            <form onSubmit={e => handleAddRoom(e)}>
                <input type="text" name="roomName" />
                <Button color="primary" type="submit">
                    Submit
                </Button>
            </form>
            {loading ? (
                <div>
                    {rooms &&
                        rooms.map((room, index) => (
                            <div key={`room/${index}`}>{room.name}</div>
                        ))}
                </div>
            ) : (
                <Spinner />
            )}
        </div>
    )
}

export default withTracker(() => {
    const load = Meteor.subscribe('rooms')
    return {
        loading: load.ready(),
        rooms: RoomApi.find({}).fetch(),
    }
})(Room)

import React, { Fragment } from 'react'
import Button from '../../../components/CustomButtons/Button'
import { Meteor } from 'meteor/meteor'
import Alert from '../../../components/Alert/Alert'

const EndPage = props => {
    const resetGame = () => {
        Meteor.call('room.page', props.roomId, null, err => {
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
    return (
        <Fragment>
            <div>EndPage</div>
            <Button onClick={() => resetGame()}>Reset</Button>
        </Fragment>
    )
}

export default EndPage

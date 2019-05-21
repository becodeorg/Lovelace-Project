import React, { Fragment } from 'react'
import Button from '../../../components/CustomButtons/Button'
import { Meteor } from 'meteor/meteor'
import Alert from '../../../components/Alert/Alert'

const ReadyPage = props => {
    const startGame = () => {
        Meteor.call('room.page', props.roomId, 0, false, err => {
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
            <div>Ready ?</div>
            <Button onClick={() => startGame()}>Go !</Button>
        </Fragment>
    )
}

export default ReadyPage

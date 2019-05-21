import React, { Fragment } from 'react'
import Spinner from '../../../components/Loader/Spinner'
import { withTracker } from 'meteor/react-meteor-data'
import { Avatar } from '@material-ui/core'
import Button from '../../../components/CustomButtons/Button'
import { Link } from 'react-router-dom'

const ReadyPage = props => {
    return (
        <Fragment>
            <div>Ready ?</div>
            <Link to={'0'}>
                <Button>Go !</Button>
            </Link>
        </Fragment>
    )
}

export default ReadyPage

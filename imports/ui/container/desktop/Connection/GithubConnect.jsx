import React from 'react'
import Button from '../../../components/CustomButtons/Button'
import { Meteor } from 'meteor/meteor'

const GithubConnection = () => {
    const loginWithGithub = () => {
        Meteor.loginWithGithub(
            {
                requestPermissions: ['user'],
            },
            err => {
                console.log(err)
                if (err) {
                    // handle error
                } else {
                    // successful login!
                }
            }
        )
    }

    return (
        <div>
            <Button color="github" onClick={() => loginWithGithub()}>
                Login with github
            </Button>
        </div>
    )
}

export default GithubConnection

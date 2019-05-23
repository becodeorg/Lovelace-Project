import React from 'react'
import Button from '../../../components/CustomButtons/Button'
import { Meteor } from 'meteor/meteor'
import { secondaryColor } from '../../../style/constant'

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
            <Button color="secondary" onClick={() => loginWithGithub()}>
                GITHUB 
                <i class="fab fa-github"></i>
            </Button>
        </div>
    )
}

export default GithubConnection

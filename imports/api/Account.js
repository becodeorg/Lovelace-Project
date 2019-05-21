import { Accounts } from 'meteor/accounts-base'
import axios from 'axios'
import { Meteor } from 'meteor/meteor'

Accounts.onCreateUser((options, user) => {
    let accessToken = user.services.github.accessToken

    axios
        .get('https://api.github.com/user', {
            params: {
                access_token: accessToken,
            },
        })
        .then(response => {
            if (response.error) {
                throw response.error
            } else {
                console.log(response.data)
                Meteor.call(
                    'user.avatar',
                    user._id,
                    response.data.avatar_url,
                    err => {
                        if (err) throw err
                    }
                )
            }
        })
    if (options.profile) user.profile = options.profile
    user.profile['email'] = user.services.github.email
    return user
    // We still want the default hook's 'profile' behavior.
})

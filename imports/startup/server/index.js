import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import '../../api/api'

Meteor.startup(() => {
    if (Meteor.isServer) {
        process.env.MAIL_URL =
            'smtps://emaim%40gmail.com:motdepasse@smtp.gmail.com:465'
        // Accounts.emailTemplates.from = 'kiwizz@lovelace.org'
        // Accounts.emailTemplates.siteName = 'kiwizz.becode.org'

        // Accounts.urls.resetPassword = token => {
        //     return Meteor.absoluteUrl('reset-password/' + token)
        // }
        console.log('server loaded !!')
    }
    if (Meteor.isProduction) {
        console.log('server is in prod mode...')
    }
    if (Meteor.isTest) {
        console.log('server is in test mode...')
    }
    if (Meteor.isDevelopment) {
        console.log('server is in dev mode...')
    }
})

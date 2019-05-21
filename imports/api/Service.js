import { Meteor } from 'meteor/meteor'
import { ServiceConfiguration } from 'meteor/service-configuration'

Meteor.startup(() => {
    ServiceConfiguration.configurations.upsert(
        {
            service: 'github',
        },
        {
            $set: {
                clientId: 'e8e5e0574cd54da5be05',
                loginStyle: 'popup',
                secret: '4580245bb940eb476d29b860ec29c5738aacb2a3',
            },
        }
    )
})

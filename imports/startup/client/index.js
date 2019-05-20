import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import App from '../../ui/layout/App'
import '../../ui/style/index.css'

Meteor.startup(() => {
    render(<App />, document.getElementById('react-target'))
})

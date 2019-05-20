import React, { Framgent } from 'react'
import DesktopContainer from '../../container/desktop/MainContainer/MainContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../../container/desktop/Home/Home'
import Room from '../../container/desktop/Room/Room'
import Header from '../../container/desktop/Header/Header'

const Desktop = () => (
    <Router basename={'admin'}>
        <DesktopContainer />
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/room" component={Room} />
    </Router>
)

export default Desktop

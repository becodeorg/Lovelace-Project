import React from 'react'
import DesktopContainer from '../../container/desktop/MainContainer/MainContainer'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from '../../container/desktop/Home/Home'
import Room from '../../container/desktop/Room/Room'

const Desktop = () => (
    <Router basename={'admin'}>
        <DesktopContainer />
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/room">Room</Link>
                </li>
            </ul>
            <hr />
            <Route exact path="/" component={Home} />
            <Route path="/room" component={Room} />
        </div>
    </Router>
)

export default Desktop

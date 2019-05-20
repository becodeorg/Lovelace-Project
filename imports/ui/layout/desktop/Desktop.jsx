import React from 'react';
import DesktopContainer from '../../container/desktop/MainContainer/MainContainer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
 

const Desktop = () => (
    <Router>
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
);

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function Room() {
    return (
        <div>
            <h2>Room</h2>
        </div>
    );
}

export default Desktop;

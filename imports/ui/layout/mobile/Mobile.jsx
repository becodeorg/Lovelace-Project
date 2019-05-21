import React from 'react'
import MobileContainer from '../../container/mobile/MainContainer/MainContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import RoomPlayers from '../../layout/mobile/HomeMobile/RoomPlayers'
import Question from '../../layout/mobile/MobileQuestion/Question'
import Podium from '../../layout/mobile/Podium/Podium'
// import LandingPage from '../../layout/LandingPage/LandingPage'

const Mobile = () => (
    <Router basename={'admin'}>
        <MobileContainer />
        {/* <Route exact path="/" component={LandingPage} /> */}
        <Route path="/roomplayers" component={RoomPlayers} />
        <Route path="/question/:question_id" component={Question} />
        <Route path="/podium" component={Podium} />
    </Router>

) 
export default Mobile

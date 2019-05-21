import React from 'react'
import MobileContainer from '../../container/mobile/MainContainer/MainContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import RoomPlayers from '../components/Mobile/HomeMobile/RoomPlayers'
import Question from '../components/Mobile/MobileQuestion/Question'
import Podium from '../components/Mobile/Podium/Podium'

const Mobile = () => (
    <Router basename={'admin'}>
        <MobileContainer />
        <Route exact path="/" component={Home} />
        <Route path="/roomplayers" component={RoomPlayers} />
        <Route path="/question/:question_id" component={Question} />
        <Route path="/podium" component={Podium} />
    </Router>

) 
export default Mobile

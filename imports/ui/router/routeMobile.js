// import LandingPage from '../layout/LandingPage/LandingPage'
import RoomPlayers from '../layout/mobile/HomeMobile/RoomPlayers'
import Question from '../layout/mobile/MobileQuestion/Question'
import Podium from '../layout/mobile/Podium/Podium'

const routeMobile = [
    // { path: '/', name: 'LandingPage', component: LandingPage, exact: true },
    { path: '/roomplayers', name: 'RoomPlayers', component: RoomPlayers, exact: true },
    { path: '/question/:question_id', name: 'Question', component: Question, exact: true },
    { path: '/podium', name: 'Podium', component: Podium, exact: true },
]

export default routeMobile
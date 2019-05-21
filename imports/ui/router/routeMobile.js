// import LandingPage from '../layout/LandingPage/LandingPage'
import RoomPlayers from '../container/mobile/HomeMobile/RoomPlayers'
import Question from '../container/mobile/MobileQuestion/Question'
import Podium from '../container/mobile/Podium/Podium'

const routeMobile = [
    // { path: '/', name: 'LandingPage', component: LandingPage, exact: true },
    {
        path: '/roomplayers',
        name: 'RoomPlayers',
        component: RoomPlayers,
        exact: true,
    },
    {
        path: '/question/:question_id',
        name: 'Question',
        component: Question,
        exact: true,
    },
    {
        path: '/podium',
        name: 'Podium',
        component: Podium,
        exact: true,
    },
]

export default routeMobile

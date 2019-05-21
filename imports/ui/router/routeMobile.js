import Root from '../container/desktop/Root'
import RoomPlayers from '../components/Mobile/HomeMobile/RoomPlayers'
import Question from '../components/Mobile/MobileQuestion/Question'
import Podium from '../components/Mobile/Podium/Podium'

const routeMobile = [
    { path: '/', name: 'Root', component: Root, exact: true },
    { path: '/roomplayers', name: 'RoomPlayers', component: RoomPlayers, exact: true },
    { path: '/question/:question_id', name: 'Question', component: Question, exact: true },
    { path: '/podium', name: 'Podium', component: Podium, exact: true },
]

export default routeMobile
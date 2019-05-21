/* eslint-disable prettier/prettier */
import Root from '../container/desktop/Home/Home'
import Room from '../container/desktop/Room/Room'
import RoomStart from '../container/desktop/RoomInfo/RoomStart'
import RoomQuestion from '../container/desktop/RoomInfo/RoomQuestion'

const routeAdmin = [
    { path: '/', name: 'Root', component: Root, exact: true },
    { path: '/room', name: 'Room', component: Room, exact: true },
    { path: '/room/:roomId', name: 'RoomInfo', component: RoomStart, exact: true },
    { path: '/room/:roomId/:questionId', name: 'RoomQuestion', component: RoomQuestion, exact: true },
]

export default routeAdmin

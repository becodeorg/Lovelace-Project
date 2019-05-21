/* eslint-disable prettier/prettier */
import Root from '../container/desktop/Root/Root'
import Room from '../container/desktop/Room/Room'
import RoomInfo from '../container/desktop/RoomInfo/RoomInfo'

const routeAdmin = [
    { path: '/', name: 'Root', component: Root, exact: true },
    { path: '/room/', name: 'Room', component: Room, exact: true },
    { path: '/room/:roomId', name: 'RoomInfo', component: RoomInfo, exact: true },
]

export default routeAdmin

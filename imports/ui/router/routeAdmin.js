import Root from '../container/desktop/Root'
import Room from '../container/desktop/Room'

const routeAdmin = [
    { path: '/', name: 'Root', component: Root, exact: true },
    { path: '/room', name: 'Room', component: Room, exact: true },
]

export default routeAdmin
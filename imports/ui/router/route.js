import Desktop from '../layout/desktop/Desktop'
import Mobile from '../layout/mobile/Mobile'

const indexRoutes = [
    { path: '/', name: 'Mobile', component: Mobile, exact: true },
    { path: '/admin', name: 'Desktop', component: Desktop, exact: false },
]

export default indexRoutes

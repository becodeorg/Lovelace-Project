import Desktop from '../layout/desktop/Desktop'
import Mobile from '../layout/mobile/Mobile'

const indexRoutes = [
    // { path: '/', name: 'Landing', component: Mobile, exact: true },
    { path: '/mobile', name: 'Mobile', component: Mobile, exact: false },
    { path: '/admin', name: 'Desktop', component: Desktop, exact: false },
]

export default indexRoutes

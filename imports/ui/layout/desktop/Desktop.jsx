import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import routeAdmin from '../../router/routeAdmin'
// import Header from '../../container/desktop/Header/Header'

const Desktop = () => (
    <Router basename={'admin'}>
        {routeAdmin.map(({ component, name, path, exact }) => {
            return (
                <Route
                    path={path}
                    component={component}
                    key={name}
                    exact={exact}
                />
            )
        })}
    </Router>
)

export default Desktop

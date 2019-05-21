import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import routes from '../../router/routeMobile'

const Mobile = () => (
    <Router basename={'mobile'}>
        {routes.map(({ component, name, path, exact }) => {
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
export default Mobile

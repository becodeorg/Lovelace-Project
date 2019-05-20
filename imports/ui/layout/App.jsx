import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme } from '../utils/theme/theme'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from '../router/route'

const App = () => (
    <MuiThemeProvider theme={theme}>
        <Router>
            <Switch>
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
            </Switch>
        </Router>
    </MuiThemeProvider>
)

export default App

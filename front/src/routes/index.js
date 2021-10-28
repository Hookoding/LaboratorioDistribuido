import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../views/Home'
import NotFound from '../views/NotFound'

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route>
                    <NotFound/>
                </Route>
            </Switch>
        </Router>
    )
}

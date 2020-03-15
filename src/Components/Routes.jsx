import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './HomePage/Home'
import StartPage from './StartPage/StartPage'
import { ProtectedRoute } from './ProtectedRoute'
export default function Routes() {
    return (
        <Router>
            <Route render={({ location }) => (
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        timeout={300}
                        classNames="fade"
                    >
                        <Switch>
                            <Route exact path="/" component={StartPage} />
                            <ProtectedRoute exact path="/home" component={Home} />
                            <Route path="*" component={() => <h1>404 NOT FOUND</h1>} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )} />
        </Router>
    )
}

import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage'

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/home">
                        <HomePage />
                    </Route>
                    <Route path="/">
                        <LoginPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router

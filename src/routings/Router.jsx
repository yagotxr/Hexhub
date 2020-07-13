import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'

class Router extends Component{

    render(){
        return(
            <BrowserRouter>
            <Switch>
                <Route path='/'>
                    <LoginPage />
                </Route>
            </Switch>
            </BrowserRouter>
            
        )
    }
}

export default Router;
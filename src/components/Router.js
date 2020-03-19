import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../App'
import ImageDetailsView from './ImageDetailsView'

const Router = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/img/:id" component={ImageDetailsView} />
        </Switch>
        </BrowserRouter>
    )
}

export default Router
import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import WebNavbar from './layout/webnavbar'
import LoginView from './views/login'
import HomeView from './views/home'

const Router = () => {
  return (
    <BrowserRouter>
      <WebNavbar />
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/login" component={LoginView} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
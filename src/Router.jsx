import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import WebNavbar from './layout/webnavbar'
import LoginView from './views/login'
import HomeView from './views/home'
import RegisterView from './views/register'
import PrivateRoute from './PrivateRoute'

const Router = () => {
  return (
    <BrowserRouter>
      <WebNavbar />
      <Switch>
        {/* <PrivateRoute exact path="/" component={HomeView} /> */}
        <Route exact path="/" component={HomeView} />
        <Route path="/login" component={LoginView} />
        <Route path="/register" component={RegisterView} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
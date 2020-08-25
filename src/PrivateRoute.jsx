import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const user = useSelector((state) => state.authReducer)

  return (
    <Route 
      {...rest}
      render={routeProps => 
        user.uid ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  )
}

export default PrivateRoute
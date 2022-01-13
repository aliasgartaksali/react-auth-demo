import React from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"
import store from '../../store';

const Authmiddleware = ({
  component: Component,
  isAuthProtected,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (isAuthProtected && store.getState().Auth.userDetails == null) {
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }

      return (
        <Component {...props} />
      )
    }}
  />
)

Authmiddleware.propTypes = {
  isAuthProtected: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
}

export default Authmiddleware;
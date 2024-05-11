import React from 'react';
import {
    Route,
    Redirect
  } from "react-router-dom";
  import { getAllUserAdmin, getUserCreatedPolls, getAllUser } from '../util/ApiUtils';
  
  
export const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
    
      <Route
        {...rest}
        render={(props) => getAllUser() ? <Component {...props} header="All Users Data Information"/> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />}
      />
    
);

export const PrivateRouteTwo = ({ component: Component, authenticated, ...rest }) => (
    
  <Route
    {...rest}
    render={(props) => getAllUserAdmin() ? <Component {...props} header="All Users Data Information"/> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />}
  />

);

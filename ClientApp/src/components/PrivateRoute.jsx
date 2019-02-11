import React from 'react';
import Layout from './Layout';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => { 
        return (
        localStorage.getItem('user')
            ? <Layout><Component {...props} /></Layout>
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )}} />
)
import React from 'react';
import Layout from './Layout';
import { Route, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => { 
        return (
        localStorage.getItem('user')
            ? <Layout><Container><Component {...props} /></Container></Layout>
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )}} />
)
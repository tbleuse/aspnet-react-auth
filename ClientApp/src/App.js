import React from 'react';
import { Route, Switch } from 'react-router';
import {connect} from 'react-redux';
import Home from './components/Home';
import { Login } from './components/Login';
import { PrivateRoute} from './components/PrivateRoute';
import {Register} from './components/Register';
import { withRouter } from 'react-router'


class App extends React.Component {
  render() {
    const alert = this.props.alert;
    return (
      <div className="container">
          {this.props.alert.message &&
              <div className={`alert ${alert.type}`}>{alert.message}</div>
          }
        <Switch> 
          <PrivateRoute exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}

const connectedApp = withRouter(connect(mapStateToProps)(App));

export { connectedApp as App};
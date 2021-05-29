import React from 'react';
import { Container } from 'react-bootstrap';
import { AuthProvidedr } from '../contexts/AuthContext';
import Signup from './authentication/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Profile from './authentication/Profile';
import Login from './authentication/Login';
import PrivateRoute from './authentication/PrivateRoute'
import ForgotPassword from './authentication/ForgotPassword'
import Dashboard from './drive/Dashboard';

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router >
          <AuthProvidedr>
            <Switch>
            <PrivateRoute exact path="/" component={Dashboard}></PrivateRoute>
              <PrivateRoute exact path='/user' component={Profile} />
              <Route path="/login" component={Login} />
              <Route path='/signup' component={Signup} />
              <Route path='/forgot-password' component={ ForgotPassword }/>
            </Switch>
          </AuthProvidedr>
        </Router>
      </div>
    </Container>
  );
}

export default App;

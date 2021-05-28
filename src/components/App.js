import React from 'react';
import { Container } from 'react-bootstrap';
import { AuthProvidedr } from '../contexts/AuthContext';
import Signup from './Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard';
import Login from './Login';

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router >
          <AuthProvidedr>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path='/' component={Dashboard} />
              <Route path='/signup' component={Signup} />
            </Switch>
          </AuthProvidedr>
        </Router>
      </div>
    </Container>
  );
}

export default App;

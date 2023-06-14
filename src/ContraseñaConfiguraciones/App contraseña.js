import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.JS'
import PrivateRoute from './routes/PrivateRoute'
import './css/App.css';
import Login from './pagesContraseña/Login'
import Signup from './pagesContraseña/Signup'
import ForgotPassword from './pagesContraseña/ForgotPassword'
import Home from './pagesContraseña/Home'
import Dashboard from './pagesContraseña/Dashboard'
import UpdateProfile from './pagesContraseña/UpdateProfile'

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path='/' component={Home} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <PrivateRoute path='/update-profile' component={UpdateProfile} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/forgot-password' component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

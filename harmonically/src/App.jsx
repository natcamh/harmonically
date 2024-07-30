import React, {useContext} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AuthProvider, AuthContext } from './AuthContext';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage'; //TODO
import './App.css'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/" exact component={HomePage} />
          <PrivateRoute path="/profile" component={ProfilePage} />
          {/* Otras rutas */}
        </Switch>
      </Router>
    </AuthProvider>
  );
};


export default App;

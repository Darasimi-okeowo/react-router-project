import React, {useState} from 'react';
import './App.css';
import './component/Login/Login.css';
import './component/Items/Items.css';
import './component/Subscription/Subscription.css';
import Login from './component/Login/Login';
import Subscription from './component/Subscription/Subscription';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ProtectedRoute from './component/Protected.route'

function App() {
  const [user, setUser] = useState(false) 
  return (
      <div>
          <Router>
            <Switch>
              <Route 
                exact path='/'
                render={
                  props => <Login {...props} user={user.toString()}
                />} 
                component={Login}/>
              <ProtectedRoute path='/subscription' component={Subscription}/>
            </Switch>
          </Router>
      </div>
  );
}

export default App;
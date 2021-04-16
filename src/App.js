import React from 'react';
import './App.css';
import './component/Login/Login.css';
import './component/Items/Items.css';
import './component/Subscription/Subscription.css';
import Login from './component/Login/Login';
import Subscription from './component/Subscription/Subscription';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ProtectedRoute} from './component/Protected.route'

function App() {
  return (
      <div>
          <Router>
            <Switch>
              <Route exact path='/' component={Login}/>
              <ProtectedRoute path='/subscription' component={Subscription}/>
              <Route path='*' component={() => '404 Not Found'}/>
            </Switch>
          </Router>
      </div>
  );
}

export default App;

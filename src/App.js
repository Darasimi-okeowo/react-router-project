import React from 'react';
import './App.css';
import './component/Login/Login.css';
import './component/Items/Items.css';
import './component/Subscription/Subscription.css';
import Login from './component/Login/Login';
import Subscription from './component/Subscription/Subscription';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
      <div>
          <Router>
            <Switch>
              <Route exact path='/' component={Login}/>
              <Route path='/subscription' component={Subscription}/>
            </Switch>
          </Router>
      </div>
  );
}

export default App;
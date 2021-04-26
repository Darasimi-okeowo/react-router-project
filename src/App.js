import React from 'react';
import './App.css';
import './component/Login/Login.css';
import './component/Items/Items.css';
import './component/Subscription/Subscription.css';
import Login from './component/Login/Login';
import Subscription from './component/Subscription/Subscription';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

function App() {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      true
      ? <Component {...props}/> 
      : <Redirect to='/'/>
    )}/> 
  )

  return (
      <div>
          <Router>
            <Switch>
              <Route exact path='/' component={Login}/>
              <PrivateRoute path='/subscription' component={Subscription} />
            </Switch>
          </Router>
      </div>
  );
}

export default App;

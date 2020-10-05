import React from 'react';
import Users from './components/users/Users'
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
        <Navbar />
        <div className="container mt-4">
          <Switch>
            <Route exact path="/users" component={Users} />
            <Route exact path="/users/:login" component={UserItem} />
            <Route exact component={Users} />
          </Switch>
        </div>
    </Router> 
    
  );
}

export default App;



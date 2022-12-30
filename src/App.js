import React from 'react';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import History from './components/History';

function App() {
  return (
    <>
      <Router history={History}>
        <Switch>
          <Route path='/wishing-you-a-happy-new-year-2023' component={Home} exact />
          <Route path='/wishing-you-a-happy-new-year-2023/name' component={Search} />
          <Route path='*' component={Search} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

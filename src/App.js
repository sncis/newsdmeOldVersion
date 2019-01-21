import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import './App.css';

const App = () => (
<BrowserRouter>
  <div>
    <Switch>
      <Route exact path="/" component={ Home }/>
    </Switch>
  </div>
</BrowserRouter>    
)
export default App;

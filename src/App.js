import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './store/store/store';
import Home from './components/Home';
import TopHeadlinesPage from './components/articles/TopHeadlinesPage';
import './App.css';

const App = () => (
<Provider store={store}>
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/todays-top-headlines" component={ TopHeadlinesPage } />
      </Switch>
    </div>
  </BrowserRouter>  
</Provider>
  
)
export default App;

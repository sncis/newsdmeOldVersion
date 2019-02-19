import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './store/store/store';
import Home from './components/Home';
import TopHeadlinesPage from './components/articles/TopHeadlinesPage';
import CustomisedNewsPage from './components/articles/CustomisedNewsPage';
import './App.css';
import appConfig from './base';

const App = () => (
<Provider store={store}>
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/todays-top-headlines" component={ TopHeadlinesPage } />
        <Route path="/customised-news" component={CustomisedNewsPage} />
      </Switch>
    </div>
  </BrowserRouter>  
</Provider>
  
)
export default App;

import React, { Component } from 'react';

// Router
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';

// Router components

import Login from './router_components/Login';
import Register from './router_components/Register';
import StartPage from './router_components/StartPage';

// Css components
import { Wrapper, HeaderUl, HeaderLi } from './my_styled_components';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Devtools
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import rootReducer from './router_reducer';


const store = createStore(rootReducer, {}, composeWithDevTools());
const App = () => (
  <Provider store={store}>
    <Router>
      <Wrapper>
        <HeaderUl>
          <HeaderLi position="a"><NavLink exact to='/'>Start</NavLink></HeaderLi>
          <HeaderLi position="j"><NavLink to='/login'>Login</NavLink></HeaderLi>
          <HeaderLi position="i"><NavLink to='/register'>Register</NavLink></HeaderLi>
        </HeaderUl>
        <Switch>
          <Route exact path='/' render={() => <StartPage />} />
          <Route path='/login' render={() => <Login />} />
          <Route path='/register' render={() => <Register />} />
        </Switch>
      </Wrapper>
    </Router>
  </Provider>
)

export default App;

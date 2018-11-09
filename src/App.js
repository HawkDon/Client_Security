import React, { Component } from 'react';

// Router
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './Header';

// Router components

import Login from './router_components/Login';
import Register from './router_components/Register';
import StartPage from './router_components/StartPage';
import MySQLSection from './router_components/MySQLSection';

// Css components
import { Wrapper } from './my_styled_components';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// Devtools
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import rootReducer from './router_reducer';

const store = createStore(rootReducer, {}, composeWithDevTools());



class App extends Component {

  state = {
    isLoggedIn: window.localStorage.getItem('auth'),
  }

  handleRefresh = () => {
    const token = window.localStorage.getItem('auth');
    this.setState({ isLoggedIn: token });
  }

  logOut = () => {
    window.localStorage.removeItem('auth');
    this.setState({
      isLoggedIn: window.localStorage.getItem('auth')
    })
  }

  render() {
    return (<Provider store={store}>
      <Router>
        <Wrapper>
          <Header isLoggedIn={this.state.isLoggedIn} logOut={this.logOut}/>
          <Switch>
            <Route exact path='/' render={() => <StartPage />} />
            <Route path='/login' render={() => <Login handleRefresh={this.handleRefresh} />} />
            <Route path='/register' render={() => <Register />} />
            <Route path='/mysql' render={() => <MySQLSection />} />
          </Switch>
        </Wrapper>
      </Router>
    </Provider>)
  }
}

export default App;

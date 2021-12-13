import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import './css/app.css'
class App extends React.Component {
  render() {
    return (
      <div className='main-app'>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/trybetunes-project" component={Login} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/album/:id" component={Album} />
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profile/edit" component={ProfileEdit} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

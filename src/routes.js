import React from 'react';

import { Switch, Route } from 'react-router-dom'; 
import Chat from './pages/Chat';
import ChatList from './pages/ChatList';
import Login from './pages/Login';

function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/login' exact component={Login} />
      <Route path='/chats' exact component={ChatList} />
      <Route path='/chat/:username' component={Chat} />
    </Switch>
  );
}

export default Routes;
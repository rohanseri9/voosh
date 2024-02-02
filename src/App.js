

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from  './components/Login';
import { AuthService } from './Compounts/Login/Authservice';
import Homepage from './Compounts/Home/Homepage';
import ProfilePage from './Compounts/ProfilePage/ProfilePage';
import TaskList from './Compounts/TaskList/TaskList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const refreshToken = AuthService.getRefreshToken();
    if (refreshToken) {
      
      AuthService.getRefreshToken(refreshToken)
        .then(newAccessToken => {
          localStorage.setItem('auth_token', newAccessToken);
          setIsLoggedIn(true);
        })
        .catch(error => {
          console.error('Failed to refresh access token:', error);
          AuthService.logout(); 
        });
    } else {
      AuthService.logout(); 
    }
  }, []);

  return (
    
      <Switch>
      <Router>
        <Route exact path="/">
          {isLoggedIn ? <Homepage/> : <Redirect to="/Login" />}
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/task" element={<TaskList />} />
        <Route path="/tasklist" element={<TaskList/>} />
        
        </Router>
      </Switch>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const redirect = window.location.pathname;
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    (async () => {
      setUserInfo(await getUserInfo());
    })();
  }, []);

  async function getUserInfo() {
    try {
      const response = await fetch('/.auth/me');
      const payload = await response.json();
      const { clientPrincipal } = payload;
      return clientPrincipal;
    } catch (error) {
      //console.error('No profile could be found');
      return undefined;
    }
  }

  const value = 'World';
  return (
    <div>
      {!userInfo && (
          <LoginForm/>
      )}
      
      {userInfo && (
        <div>
          Hello {value}. We're running react! <br/><br/>
          <div className="user">
            <p>Welcome</p>
            <p>{userInfo && userInfo.userDetails}</p>
            <p>{userInfo && userInfo.identityProvider}</p>
          </div>
          <a href="/.auth/logout">Log out</a>
        </div>
      )}      
    </div>
  );
}

export default App;

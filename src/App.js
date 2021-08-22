import React, { useState, useEffect } from 'react';

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
      Hello {value}. We're running react! <br/><br/>

      {!userInfo && (
        <>
        <a href={`/.auth/login/google?post_login_redirect_uri=${redirect}`}>Google Login</a><br/>
        <a href={`/.auth/login/github?post_login_redirect_uri=${redirect}`}>GitHub Login</a><br/>
        </>
      )}      
      
      {userInfo && (
        <div>
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

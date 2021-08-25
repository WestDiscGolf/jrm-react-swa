import React, { useState, useEffect } from 'react';

function App() {
  const redirect = window.location.pathname;
  const [userInfo, setUserInfo] = useState();
  const [claims, setClaims] = useState();

  useEffect(() => {
    (async () => {
      setUserInfo(await getUserInfo());
      setClaims(await getClaims())
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

  async function getClaims() {
    try {
      const response = await fetch('api/TestGet');
      const payload = await response.json();

      const { claimsPrincipal } = payload;
      return claimsPrincipal;
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
            <p>{userInfo && userInfo.identityProvider}</p><br/>
            {claims && (
              <>
                <p>Claims</p>
                <p>{JSON.stringify(claims)}</p>
              </>
            )}            
          </div>
          <a href="/.auth/logout">Log out</a>
        </div>
      )}      
    </div>
  );
}

export default App;

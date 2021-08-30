import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './LoginForm.css';

function LoginForm() {
  const redirect = window.location.pathname;
  const handleClick = () => window.location.href = `/.auth/login/google?post_login_redirect_uri=${redirect}`;

  return (
    <div className="login-container">
      <Card className="login-card">
        <Card.Img variant="top" src="https://jhoonrheetkd.com/images/patch-logo-might-for-right.jpg" />
        <Card.ImgOverlay>
          <Card.Title>Rank Manager Login</Card.Title>
          <Button variant="primary" onClick={handleClick}>Login</Button>
        </Card.ImgOverlay>
      </Card>
    </div>
    // <main class="form-signin">
    //   <form>
    //     <img class="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
    //     <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
    
    //     <div class="form-floating">
    //       <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
    //       <label for="floatingInput">Email address</label>
    //     </div>
    //     <div class="form-floating">
    //       <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
    //       <label for="floatingPassword">Password</label>
    //     </div>
    
    //     <div class="checkbox mb-3">
    //       <label>
    //         <input type="checkbox" value="remember-me" /> Remember me
    //       </label>
    //     </div>
    //     <Button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</Button>
    //     <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
    //   </form>
    // </main>
  );
}

export default LoginForm;
import React from 'react';
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
  );
}

export default LoginForm;
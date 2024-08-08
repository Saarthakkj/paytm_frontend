import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signin.css'; // Assuming you have a CSS file for styling

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className = "title"> <b>Sign In</b></div>
        <div className = "subtitle">Enter your credentials to access your account.</div> 
        <div className= "labels">
          <label className="label"><b>Email</b></label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="input"
            required
          /><br></br>
          <label className="label"><b>Password</b></label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="input"
            required
          /><br></br>
        </div>
        <button type="submit" className="button">
          Sign In
        </button>
        <div className = "lastmessage"> 
          Don't have an account? 
          <Link to="/signup">Sign up here</Link>
        </div>
      </form>
    </div>
  );
}

export default Signin;
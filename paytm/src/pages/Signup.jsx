import { useState } from "react";
import "./Signup.css";
import { UserSchema } from "./types.ts";
import { Link, Route, Routes } from "react-router-dom";

export default function Signup() {
  //useState is a react hook , returns tqwo values
  // firs-> state
  //second -> function that updates state
  //value passed in useState is the default value of the state.
  const [FirstName, setFirstname] = useState("");
  const [LastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
    setSubmitted(false);
  };
  const handleLastname = (e) => {
    setLastname(e.target.value);
    setSubmitted(false);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = UserSchema.safeParse({ name, email, password });
    //here 'e' doesn't mean error but EVENT OBJECT
    //deafult behaviour of this form-submit button -> to reload
    //preventDeefault() -> to prevent this

    if (!response.success) {
      setError(true);
      //console.log("All fields are mandatory!");
    } else {
      console.log("Form is submitted!");
      setError(false);
      setSubmitted(true);
    }
  };

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h3> Form is submitted!</h3>
      </div>
    );
  };
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: !submitted ? "" : "none",
        }}
      >
        <h3> All fields are mandatory!</h3>
      </div>
    );
  };

  return (
    <div className="form">
      <div className="title">
        <h1> Sign Up</h1>
      </div>
      <div className="subtitle">
        Enter your information to create an account.
      </div>
      {/* <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div> */}
      <form className="fields">
        <label className="label">
          {" "}
          <b>First Name</b>
        </label>
        <input
          onChange={handleFirstname}
          className="input"
          value={FirstName}
          type="text"
        />
        <br></br>
        <label className="label">
          {" "}
          <b>Last Name</b>
        </label>
        <input
          onChange={handleLastname}
          className="input"
          value={LastName}
          type="text"
        />
        <br></br>
        <label className="label">
          {" "}
          <b>Email</b>
        </label>
        <input
          onChange={handleEmail}
          className="input"
          value={email}
          type="email"
        />
        <br></br>
        <label className="label">
          {" "}
          <b>Password</b>
        </label>
        <input
          onChange={handlePassword}
          className="input"
          value={password}
          type="password"
        />
        <br></br>
      </form>
      <button onClick={handleSubmit} className="submit">
        Sign Up
      </button>

      <div className="account-link">
        Already have an account?
        <Link to="/signin">Sign In</Link>
      </div>
    </div>
  );
}

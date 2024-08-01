import { useState } from "react";
import './Signup.css';


export default function Signup() {
  //useState is a react hook , returns tqwo values
  // firs-> state
  //second -> function that updates state
  //value passed in useState is the default value of the state.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const handleName = (e) => {
    setName(e.target.value);
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
    //here 'e' doesn't mean error but EVENT OBJECT
    //deafult behaviour of this form-submit button -> to reload
    //preventDeefault() -> to prevent this
    if (name === "" || email === "" || password === "") {
      setError(true);
    } else {
      setError(false);
      setSubmitted(true);
    }
  };

  const successMessage = () => {
    return (
      <div className = "success" style ={
        {
          display : submitted ? "" :  "none"
        }
      }>
        <h1> Form is submitted!</h1>
      </div>
    );
  };
  const errorMessage = () => {
    return (
      <div className = "success" style ={
        {
          display : !submitted ? "" :  "none"
        }
      }>
        <h3> All fields are mandatory!</h3>
      </div>
    );
  };

  return (
    <div className="form">
      <div>
        <h1> Signup</h1>
      </div>
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
      <form>
        <label className="label"> Name</label>
        <input
          onChange={handleName}
          className="input"
          value={name}
          type="text"
        /><br></br>
        <label className="label"> Email</label>
        <input
          onChange={handleEmail}
          className="input"
          value={email}
          type="email"
        /><br></br>
        <label className="label"> Password</label>
        <input
          onChange={handlePassword}
          className="input"
          value={password}
          type="password"
        /><br></br>
        <button onClick={handleSubmit} className="button">
          Submit
        </button>
      </form>
    </div>
  );
}

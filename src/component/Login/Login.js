import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Auth from '../Auth'
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value, "email");
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value, "email");
  };

  // const buttonHandler = () => {
  //   // if (email === "dara" && password === "123") {
  //   //   return;
  //   // } else {
  //   //   alert("wrong email and password");
  //   // }
  // };
  return (
    <div className="main-wrapper">
      <div className="wrapper">
        <div className="title-wrapper">
          <h1>Welcome To Appruve Plan Portal</h1>
        </div>
        <div className="form-wrapper">
          <h2>SIGNIN</h2>
          <div className="form-wrapper--1">
            <label>Email</label>
            <input
              type="text"
              value={email}
              placeholder="Email"
              onChange={emailHandler}
            ></input>
          </div>
          <div className="form-wrapper--2">
            <label>Password</label>
            <input
              type="text"
              value={password}
              placeholder="Password"
              onChange={passwordHandler}
            ></input>
          </div>
          <NavLink to="/subscription">
            <button onClick={ () => {
              Auth.login(() => {
                props.history.push("/Subscription")
              })
            }}>SIGNIN</button>
          </NavLink>
          <em>Email: adududuke@gmail.com, Password: BlessedAdudu</em>
        </div>
      </div>
    </div>
  );
};
export default Login;

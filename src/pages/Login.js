// SAI ADITYA EDE         1002035418
// VARUN REDDY KOKKANTI   1002022689
// SAI LASYA YADALA       1002029134

import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Link, Redirect, useHistory } from "react-router-dom";
import Navbar from "../Navbar";

import "./Login.css";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const history = useHistory();
  const [userinfo, setUserinfo] = useState({ name: "", password: "" });
  // User Login info
  useEffect(() => {
    if (localStorage.getItem("login")) {
      history.push("/userdashboard");
    }
  }, []);
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    console.log(userinfo);

    axios
      // .get("http://localhost/api/index.php", userinfo)
.get("https://phpbackendcode.herokuapp.com/index.php",userinfo)
      .then((res) => {
        console.log(res);
        const x = res?.data.find((obj) => {
          return obj.name == userinfo.name;
        });
console.log(x)
if (x?.password ==userinfo.password){
        if (res.status == 200) {
          localStorage.setItem("loggedin",true);
          localStorage.setItem("userdetails",JSON.stringify(x));
          if (x?.role == "admin") {
           
            history.push("/admin");
          } else {
            
            history.push("/userdashboard");
          }
        }
      }
    else{
      alert("please check your password")
    }
      });
  };
  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  const changedInput = (val1, val2) => {
    console.log(val1);
    let d = { ...userinfo };
    d[val2] = val1;
    setUserinfo(d);
  };
  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input
            type="text"
            name={userinfo?.name}
            onChange={(e) => changedInput(e.target.value, "name")}
            required
          />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name={userinfo.password}
            onChange={(e) => changedInput(e.target.value, "password")}
            required
          />
          {renderErrorMessage("pass")}
          <span>
            Forgot paaword <Link to="/changepassword">Click here!!!!!!</Link>
          </span>
        </div>
        <div className="button-container">
          <input type="submit" value="Login" />
        </div>
      </form>
      <p>
        Not Registered <Link to="/register">Register Here</Link>
      </p>
      {/* <p>
        Admin Login <Link to="/admin">Login</Link>
      </p> */}
    </div>
  );

  return (
    <>
      {isSubmitted ? (
        <Redirect to="/userdashboard" />
      ) : (
        <>
          <Navbar></Navbar>
          <div className="app">
            <div className="login-form">
              {isSubmitted ? (
                <div>User is successfully logged in</div>
              ) : (
                renderForm
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Login;

// SAI ADITYA EDE         1002035418
// VARUN REDDY KOKKANTI   1002022689
// // SAI LASYA YADALA       1002029134

import axios from "axios";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link, Switch, Route, Redirect, useHistory } from "react-router-dom";
import Navbar from "../Navbar";

import "./Login.css";
import UserScreen from "./UserScreen";

function RegistrationForm() {
  // React States
  const history = useHistory();

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userinfo, setUserinfo] = useState({
    name: "",
    email: "",
    gender: "",
    password: "",
    re_type: "",
    dateofbirth: "",
    contact: "",
    family_name: "",
    role: "user",
    created_date: Date().toString(),
  });

  // User Login info
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
    if (userinfo?.password != userinfo?.re_type) {
      alert("password do not match");
      return;
    }

    axios

      .post("https://phpbackendcode.herokuapp.com/index.php", userinfo)

      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          history.push("/login");
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
          <label>Email </label>
          <input
            type="text"
            name={userinfo?.email}
            onChange={(e) => changedInput(e.target.value, "email")}
            required
          />
          {renderErrorMessage("email")}
        </div>
        <div className="input-container">
          <label>Date Of Birth </label>
          <input
            type="text"
            name={userinfo?.dateofbirth}
            onChange={(e) => changedInput(e.target.value, "dateofbirth")}
            required
          />
          {renderErrorMessage("dateofbirth")}
        </div>
        <div className="input-container">
          <label for="cars">Choose a Family:</label>
          <select
            type="text"
            name="cars"
            id="cars"
            onChange={(e) => changedInput(e.target.value, "family")}
          >
            <option value="Melchor">Melchor</option>
            <option value="Goyo">Goyo</option>
            <option value="Chico">Chico</option>
            <option value="Marcelina">Marcelina</option>
            <option value="Mencha">Mencha</option>
            <option value="Raimunda">Raimunda</option>
            <option value="Arcadio">Arcadio</option>
            <option value="Agapito">Agapito</option>
            <option value="Pedro">Pedro</option>
            <option value="Eulalia">Eulalia</option>
            <option value="Cleto">Cleto</option>
            <option value="Evarista">Evarista</option>
            <option value="Juana">Juana</option>
            <option value="Justina">Justina</option>
          </select>
        </div>
        <div className="input-container">
          <label for="cars">Choose a Family:</label>
          <select
            type="text"
            name="cars"
            id="cars"
            onChange={(e) => changedInput(e.target.value, "gender")}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name={userinfo?.password}
            onChange={(e) => changedInput(e.target.value, "password")}
            required
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="input-container">
          <label>ReType-Password </label>
          <input
            type="password"
            name={userinfo?.re_type}
            onChange={(e) => changedInput(e.target.value, "re_type")}
            required
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="input-container">
          <label>Contact Number </label>
          <input
            type="text"
            name={userinfo?.contact}
            onChange={(e) => changedInput(e.target.value, "contact")}
            required
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );

  return (
    <>
      {isSubmitted ? (
        <Redirect to="/userdashboard" />
      ) : (
        <>
          <Navbar></Navbar>
          <div className="app1_register">
            <div className="login-form">
              <div className="title">Register!!!</div>
              {renderForm}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default RegistrationForm;

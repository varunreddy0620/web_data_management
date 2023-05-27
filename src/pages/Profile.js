// SAI ADITYA EDE         1002035418
// VARUN REDDY KOKKANTI   1002022689
// SAI LASYA YADALA       1002029134

import React from "react";
import { Router, Route } from "react-router-dom";
import Accordian from "./Accordian";
import Login from "./Login";
import Piechart from "./Piechart";
import Sidebar from "./Sidebar";

function Profile() {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div>
            <label>Username </label>
            <input type="text" name="uname" required />
          </div>
          <div>
            <label>Email </label>
            <input type="text" name="uname" required />
          </div>
          <div>
            <label>Password </label>
            <input type="password" name="uname" required />
          </div>
          <div>
            <label>Contact </label>
            <input type="text" name="uname" required />
          </div>
          <div>
            <label>Lands </label>
          The total lands own by are 8 and your family is 20 and its area is 200 acres 
          </div>
          <div>
            <label>Lands </label>
          The total Projects own by are 8 and your family arw 20
          </div>
        </div>
        <div>
          <Piechart></Piechart>
        </div>
      </div>
    </div>
  );
}

export default Profile;

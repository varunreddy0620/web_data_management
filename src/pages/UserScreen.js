// SAI ADITYA EDE         1002035418
// VARUN REDDY KOKKANTI   1002022689
// SAI LASYA YADALA       1002029134

import React, { useEffect } from "react";
import { useState } from "react";
import { Router, Route, useHistory } from "react-router-dom";
import Family_Mem from "./Family_Mem";
import Lands from "./Lands";
import Login from "./Login";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import Projects from "./Projects";
import EditPersondetails from "../EditPersondetails";
import BuyLands from "./BuyLands";

function UserScreen() {
  const history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem("loggedin")) {
      history.push("/login");
    }
  }, []);
  const [value_selected, setValue_selected] = useState("Profile");
  const sidebar_value = (val) => {
    setValue_selected(val);
  };
  return (
    <div
      style={{ height: "90vh", display: "flex", backgroundColor: "#CAD5E2" }}
    >
      <Sidebar
        selected_value={value_selected}
        sidebar_value={sidebar_value}
      ></Sidebar>
      {value_selected == "Profile" && <EditPersondetails />}
      {value_selected == "Family" && <Family_Mem />}
      {value_selected == "Lands" && <Lands />}
      {value_selected == "Projects" && <Projects />}
      {value_selected == "BuyLands" && <BuyLands />}
      {value_selected == "Logout" && <Projects />}
    </div>
  );
}

export default UserScreen;

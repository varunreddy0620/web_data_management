// SAI ADITYA EDE         1002035418
// VARUN REDDY KOKKANTI   1002022689
// SAI LASYA YADALA       1002029134

import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, useHistory, Redirect } from "react-router-dom";
import Family_Mem from "./Family_Mem";
import ParentModal from "./ParentModal";
import Profile from "./Profile";
import Projects from "./Projects";
import "./Sidebar.css";

function Sidebar(props) {
  const history=useHistory();
  const { selected_value, sidebar_value } = props;
  const [sidebar_details, setSidebar_details] = useState([
    "Profile",
    "Family",
    "Projects",
    "Lands",
    "BuyLands",
    "Logout",
  ]);
  const [selectedVal, setSelectedVal] = useState("Profile");
  const [logout, setLogout] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const clickedSidebar = (val) => {
    console.log(val);
   
    if (val == "Logout") {
      setLogout(true);
      setOpen(true);
    } else {
      setSelectedVal(val);
      sidebar_value(val);
    }
  };
  const logoutfunction = (val) => {
    if (val) {
      localStorage.clear()
history.push('/')
    }
    
      setLogout(val)
      setOpen(val)
    
  };
  return (
    <div className="sidebar">
      {sidebar_details.map((x) => (
        <div
          className={
            x == selected_value ? "sidebar_content_selected" : "sidebar_content"
          }
          id={x}
          onClick={() => clickedSidebar(x)}
        >
          {x}
        </div>
      ))}
      
      {open && (
        <ParentModal
          handleOpen={handleOpen}
          logoutfunction={logoutfunction}
          open={open}
          handleClose={handleClose}
        ></ParentModal>
      )}
    </div>
  );
}

export default Sidebar;

// SAI ADITYA EDE         1002035418
// VARUN REDDY KOKKANTI   1002022689
// SAI LASYA YADALA       1002029134



import React from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";

import "./Admin.css";
import Admin_Dashboard from "./Admin_Dashboard";
import EditPersondetails from "./EditPersondetails";
import ProfileSettings from "./ProfileSettings";
import RegisterUsers from "./RegisterUsers";
const profile = new URL("./img/profilepic.png", import.meta.url);
function Admin() {
  const [selected_tab,setSelected_tab]=useState('dash')
  const [showModal,setShowModal]=useState(false)
  const clicked=(val)=>{
    setShowModal(false)
   setSelected_tab(val)
    
  }
  const modelClicked=()=>{
    setShowModal(true)
    
  }
  return (
    <div className="admin_board">
      <div className="first_header">
        <div>
          <h4>ADMIN DASHBOARD</h4>
        </div>
        <div>Logout</div>
      </div>
      <div className="second_header">
        <div className="sidebar1">
          <img src={profile} />
          <blockquote style={{ color: "white" }}>Sai Aditya Ede</blockquote>
          <div className="sidebar_navigations">
            <div className={selected_tab=='dash' ? 'nav_tabs_div_selected' : 'nav_tabs_div'} onClick={()=>clicked('dash')}>Dashboard</div>
            <div className={selected_tab=='profile' ? 'nav_tabs_div_selected' : 'nav_tabs_div'} onClick={()=>clicked('profile')}>profile Settings</div>
            <div className={selected_tab=='register' ? 'nav_tabs_div_selected' : 'nav_tabs_div'} onClick={()=>clicked('register')}>Register Users</div>
          </div>
        </div>

        <div className="sidebar2">
          {selected_tab=="dash" && showModal==false && <Admin_Dashboard modelClicked={modelClicked}></Admin_Dashboard>}
          {selected_tab=="profile" && <ProfileSettings ></ProfileSettings>}
          {selected_tab=="register" && <RegisterUsers></RegisterUsers>}
          {showModal && <EditPersondetails></EditPersondetails>}
        </div>
      </div>
    </div>
  );
}

export default Admin;

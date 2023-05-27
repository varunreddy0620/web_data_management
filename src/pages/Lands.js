// SAI ADITYA EDE         1002035418
// VARUN REDDY KOKKANTI   1002022689
// SAI LASYA YADALA       1002029134

import React, { useState, useEffect } from "react";
import { Router, Route } from "react-router-dom";
import LandModal from "./LandModal";
import Land_des from "./Land_des";
import Login from "./Login";
import Project_description from "./Project_description";
import Sidebar from "./Sidebar";
import Table from "./Table";
import "./table.css";
import axios from "axios";

function Lands() {
  const cols = [
    "land_id",
    "location",
    "area",
    "projectsdone",
    "expenses",
    "income",
    "marketvalue",
    "trials",
    "personemail",
    "forsale",
  ];
 
  const [rows, setRows] = useState([]);
  const [create_project_variable, setCreate_project_variable] = useState(false);
  const [show_land, setShow_land] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [selected_row, setSelectedRow] = useState({});
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios.get("https://phpbackendcode.herokuapp.com/lands.php").then((res) => {
      console.log("rows", res.data);
      setRows(res.data);
    });
  };
  const createproject = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const viewDetails = () => {
    setShow_land(true);
  };
  const create_land = () => {
    setOpen(true);
  };

  return (
    <div className="family_details">
      {!show_land && (
        <>
          <div className="Create">
            {open && (
              <LandModal
                getData={getData}
                open={open}
                createproject={createproject}
                handleClose={handleClose}
              ></LandModal>
            )}
            <button style={{ cursor: "pointer" }} onClick={create_land}>
              {" "}
              + Add New Property
            </button>
          </div>
          <Table columns={cols} rows={rows} viewRow={viewDetails}></Table>
        </>
      )}
      {show_land && <Land_des getData={getData}></Land_des>}
    </div>
  );
}

export default Lands;

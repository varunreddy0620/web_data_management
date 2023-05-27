// SAI ADITYA EDE         1002035418
// VARUN REDDY KOKKANTI   1002022689
// SAI LASYA YADALA       1002029134

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Router, Route } from "react-router-dom";
import Login from "./Login";
import Piechart from "./Piechart";
import ProjectModal from "./ProjectModal";

import Project_description from "./Project_description";
import Sidebar from "./Sidebar";
import Table from "./Table";
import "./table.css";

function Projects() {
  const [columns, setColumns] = useState([
    "id",
    "name",
    "startdate",
    "status",
    "enddate",
    "budget",
    "colloboration",
    "personemail",
  ]);
  const [rows, setRows] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    // axios.get("http://localhost/api/projects.php").then((res) => {
    axios
      .get("https://phpbackendcode.herokuapp.com/projects.php")
      .then((res) => {
        console.log("rows", res.data);
        setRows(res.data);
      });
  };
 
  const [create_project_variable, setCreate_project_variable] = useState(false);
  const [show_project, setShow_project] = useState(false);
  const [show_modal, setShow_modal] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [selected_row, setSelectedRow] = useState({});
  const createproject = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const viewDetails = (r) => {
    setSelectedRow(r);
    setShow_project(true);
  };
const deleteProject=()=>{
  console.log('d',selected_row)
  // product.php?pid='dynamic id'
  alert(typeof(selected_row?.id))
  // axios.delete(`http://phpbackendcode.herokuapp.com/projects.php/1/delete`)
  axios.delete("http://localhost/api/projects.php/1/delete")
  .then((res) => {
    console.log("rows", res);
    if(res.data.status==1){
      alert("Project Successfully deleted")
      setSelectedRow({})
      setShow_project(false)
      getData()
    }
    else{
      alert("Failed to delete")
    }
  });

}
  return (
    <div className="family_details">
      {!show_project && (
        <>
          {" "}
          <div style={{ backgroundColor: "#CAD5E2" }}>
            {" "}
            <Piechart></Piechart>
          </div>
          <div className="Create">
            {open && (
              <ProjectModal
                getData={getData}
                open={open}
                createproject={createproject}
                handleClose={handleClose}
              ></ProjectModal>
            )}
            <button onClick={createproject}> + CREATE PROJECT</button>
          </div>
          {rows.length > 0 ? (
            <Table columns={columns} rows={rows} viewRow={viewDetails}></Table>
          ) : (
            <div>No Data</div>
          )}
        </>
      )}
      {show_project && <Project_description selected_row={selected_row}  deleteProject={deleteProject}></Project_description>}
    </div>
  );
}

export default Projects;

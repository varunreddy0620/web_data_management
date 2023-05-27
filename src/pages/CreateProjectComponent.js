import axios from "axios";
import React, { useState } from "react";
import Calender from "./Calender";

function CreateProjectComponent(props) {
  const {getData}=props
  const [projectdetails, setProjectdetails] = useState({
    name: "-",
    startdate: "-",
    status: "-",
    enddate: "-",
    budget: "-",
    personemail: "sai",
    colloboration: JSON.stringify({ names: [] }),
  });
  const [errorMessages, setErrorMessages] = useState({});

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  const changedInput = (val1, val2) => {
    console.log(val1);
    let d = { ...projectdetails };
    d[val2] = val1;
    setProjectdetails(d);
  };
  const submitClicked=()=>{
    // .post("https://phpbackendcode.herokuapp.com/index.php", userinfo)

    axios
      .post("https://phpbackendcode.herokuapp.com/projects.php", projectdetails)
       //.post("http://localhost/api/projects.php", projectdetails)
   
    .then((res)=>{
      if(res.status==200){
        alert("Successfully created ")
        getData()
      }
    })

  }
  return (
    <div>
      <div className="input-container">
        <label>Username </label>
        <input
          type="text"
          name={projectdetails?.name}
          onChange={(e) => changedInput(e.target.value, "name")}
          required
        />
        {renderErrorMessage("uname")}
        <Calender></Calender>
        <div className="input-container">
          <label for="cars">Project Status:</label>
          <select
            type="text"
            name="cars"
            id="cars"
            onChange={(e) => changedInput(e.target.value, "status")}
          >
            <option value="Finished">Finished</option>
            <option value="Progress">Progress</option>
            <option value="Unfinished">Unfinished</option>
          </select>
        </div>
        <div className="input-container">
          <label>Budget </label>
          <input
            type="text"
            name={projectdetails?.budget}
            onChange={(e) => changedInput(e.target.value, "budget")}
            required
          />
        </div>
        <div className="input-container">
          <label for="cars">Project Status:</label>
          <select
            type="text"
            name="cars"
            id="cars"
            onChange={(e) => changedInput(e.target.value, "status")}
          >
            <option value="Finished">Finished</option>
            <option value="Progress">Progress</option>
            <option value="Unfinished">Unfinished</option>
          </select>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <buton
          onClick={submitClicked}
            style={{
              backgroundColor: "green",
              padding: "10px",
              color: "white",
              cursor:"pointer"
            }}
          >
            SUBMIT
          </buton>
        </div>
      </div>
    </div>
  );
}

export default CreateProjectComponent;

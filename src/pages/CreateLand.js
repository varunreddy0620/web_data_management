import axios from "axios";
import React, { useState } from "react";
import Calender from "./Calender";

function CreateLand(props) {
  const { getData } = props;
  const [landdetails, setLanddetails] = useState({
    land_id: "-",
    location: "-",
    area: "-",
    projectsdone: "-",
    expenses: "-",
    income: "-",
    marketvalue: "-",
    trials: "",
    personemail: "sai",
    forsale: "",
  });
  const [errorMessages, setErrorMessages] = useState({});

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  const changedInput = (val1, val2) => {
    console.log(val1);
    let d = { ...landdetails };
    d[val2] = val1;
    setLanddetails(d);
  };
  const submitClicked = () => {
    
    

    axios
      .post("https://phpbackendcode.herokuapp.com/lands.php", landdetails)

      .then((res) => {
        if (res.status == 200) {
          alert("Successfully created ");
          getData();
        }
      });
  };
  return (
    <div>
      <div className="input-container">
        <label>LandId </label>
        <input
          type="text"
          name={landdetails?.land_id}
          onChange={(e) => changedInput(e.target.value, "land_id")}
          required
        />
        {renderErrorMessage("land_id")}
        <label>Location </label>
        <input
          type="text"
          name={landdetails?.location}
          onChange={(e) => changedInput(e.target.value, "location")}
          required
        />
        {renderErrorMessage("location")}
        <label>Area </label>
        <input
          type="text"
          name={landdetails?.area}
          onChange={(e) => changedInput(e.target.value, "area")}
          required
        />
        {renderErrorMessage("area")}

        <label>Projects Done on this Land </label>
        <input
          type="text"
          name={landdetails?.projectsdone}
          onChange={(e) => changedInput(e.target.value, "projectsdone")}
          required
        />
        {renderErrorMessage("projectsdone")}

        <label>Expenses </label>
        <input
          type="text"
          name={landdetails?.expenses}
          onChange={(e) => changedInput(e.target.value, "expenses")}
          required
        />
        {renderErrorMessage("expenses")}
        <label>income </label>
        <input
          type="text"
          name={landdetails?.income}
          onChange={(e) => changedInput(e.target.value, "income")}
          required
        />
        {renderErrorMessage("income")}
        <label>marketvalue </label>
        <input
          type="text"
          name={landdetails?.marketvalue}
          onChange={(e) => changedInput(e.target.value, "marketvalue")}
          required
        />
        {renderErrorMessage("marketvalue")}
        <label>Trials </label>
        <input
          type="text"
          name={landdetails?.trials}
          onChange={(e) => changedInput(e.target.value, "trials")}
          required
        />
        <label for="cars">Keep it for Sale:</label>
        <select
          type="text"
          name="cars"
          id="cars"
          onChange={(e) => changedInput(e.target.value, "forsale")}
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        {renderErrorMessage("trials")}

        <div style={{ display: "flex", justifyContent: "center" }}>
          <buton
            onClick={submitClicked}
            style={{
              backgroundColor: "green",
              padding: "10px",
              color: "white",
            }}
          >
            SUBMIT
          </buton>
        </div>
      </div>
    </div>
  );
}

export default CreateLand;

// SAI ADITYA EDE         1002035418
// VARUN REDDY KOKKANTI   1002022689
// SAI LASYA YADALA       1002029134

import axios from "axios";
import React, { useEffect, useState } from "react";
import "./EditPersondetails.css";
import Accordian from "./pages/Accordian";
import Table from "./pages/Table";

const profile = new URL("./img/profilepic.png", import.meta.url);

function EditPersondetails() {
  const [userdetails, setUserdetails] = useState({
    contact: "",
    email: "",
    family_name: "",
    id: "",
    name: "",
    password: "",
  });
  const landcols = [
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
  const [landRows, setLandRows] = useState([]);
  const [rows, setRows] = useState([]);
  useEffect(() => {
    if (typeof localStorage.getItem("userdetails") != undefined) {
      let x = JSON.parse(localStorage.getItem("userdetails"));
      setUserdetails(x);
      getData();
      getData2();
    }

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
  const getData2 = () => {
    axios.get("https://phpbackendcode.herokuapp.com/lands.php").then((res) => {
      console.log("rows", res.data);
      setLandRows(res.data);
    });
  };
  return (
    <div className="editperson">
      <div className="footer">
        <button
          style={{
            margin: "5px",
            paddingLeft: "5px",
            paddingRight: "5px",
            backgroundColor: "green",
          }}
        >
          EDIT
        </button>
        <button
          style={{
            margin: "5px",
            paddingLeft: "5px",
            paddingRight: "5px",
            backgroundColor: "#B9345A",
            borderRadius: "5px",
          }}
        >
          DELETE
        </button>
      </div>
      <body>
        <center>
          <h1> {userdetails?.name}</h1>
          <div>
            <span>
              <img
                style={{
                  border: "2px solid",
                  width: " 250px",
                  height: "221px",
                }}
                alt="Photo"
                src={profile}
              />

              <br />
            </span>
          </div>
        </center>
        <h2>Contact Information</h2>
        <ul>
          <li>
            <span>Mobile number</span>
            <span>{userdetails?.contact}</span>
          </li>
          <li>
            <span>Mail Id:</span>:{" "}
            <a target="_blank" href="edesaiaditya@gmail.com">
              {userdetails?.email}
            </a>
            <span>
              If you are emailing me regarding any property , please put the
              land name , survey number at the start of your message .
            </span>
          </li>
        </ul>
        <h2>Projects</h2>
        <Accordian style={{ border: "1px solid black" }} cols={columns} rows={rows}></Accordian>
        <h2>Lands</h2>
        <Accordian style={{ border: "1px solid black" }} cols={landcols} rows={landRows}></Accordian>
        <h2>Family</h2>
        <Accordian style={{ border: "1px solid black" }}></Accordian>
      </body>
    </div>
  );
}

export default EditPersondetails;

/* <h2>About Me</h2>
<a target="_blank" href="Vamsikrishna%20Gopikrishna.pdf">
  My CV
</a>
<br />
<br />
My areas of interest are Pattern Recognition, Neural Networks, Computer
Vision, Machine Learning and Artificial Intelligence.
<br />
<br />
I am orginally from India. I received my BE in Computer Science and
Engineering in 2006 from Sri Venkateshwara College of Engineering
(Affiliated to Anna University, Chennai). I completed my MS in Computer
Engineering from University of Texas at Arlington in fall of 2008 under
the guidance of Dr. Manfred Huber. My thesis was on “Temporal potential
function approach for path planning in dynamic environments”. I
completed my PhD in Computer Science again under the guidance of Dr.
Manfred Huber in summer of 2016. My dissertation was on "Building 3D
shape primitive based object models from range images".
<br />
<br />
Over the course of my PhD studies, I worked as a TA for&nbsp;many
courses. I was also an instructor teaching Artificial Intelligence - I
to Graduate and Undergraduate students at UTA during Fall of 2012 and
2015. I also taught STEM Engineering Research and Precalculus to High
School students as part of the TRANSITIONS Summer Bridge program at UTA
in 2010 and 2011 and was a tutor at a Help desk for students taking
introductory programming courses. After graduation I worked as an
Adjucnt Professor teaching Artificial Intelligence - I in Spring 2017.
As of Fall 2017, I have been working as Senior Lecturer here at
University of Texas at Arlington..
<h2>External Links</h2> */

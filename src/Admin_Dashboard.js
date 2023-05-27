// SAI ADITYA EDE         1002035418
// VARUN REDDY KOKKANTI   1002022689
// SAI LASYA YADALA       1002029134

import React, { useEffect, useState } from "react";
import Table from "./pages/Table";
import axios from "axios";

function Admin_Dashboard(props) {
  const { modelClicked } = props;
  const [rows, setRows] = useState([]);
  const columns = ["id", "name", "contact", "email", "family_name"];
  // const columns=["id","name","gender","projects","Lands","birth_date","contact","email","action"]
  const viewDetails = (e) => {
    console.log(e);
    modelClicked(true);
  };

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    //Prevent page reload

    axios

      .get("https://phpbackendcode.herokuapp.com/index.php")

      .then((res) => {
        console.log(res);

        if (res.status == 200) {
          setRows(res.data);
        }
      });
  };
  const dynamicStringSpan = <button> VIEW </button>;

  const row = [
    {
      id: 1,
      name: "Sai Aditya",
      gender: "Male",
      projects: 8,
      Lands: 2,
      birth_date: "19/2/1985",
      contact: 9493723628,
      email: "edesaiaditya@gmail.com",
      edit: <button onClick={(e) => viewDetails(e)}> VIEW </button>,
    },
    {
      id: 2,
      name: "Sai Aditya",
      gender: "Male",
      projects: 8,
      Lands: 2,
      birth_date: "19/2/1985",
      contact: 9493723628,
      email: "edesaiaditya@gmail.com",
      edit: dynamicStringSpan,
    },
    {
      id: 3,
      name: "Sai Aditya",
      gender: "Male",
      projects: 8,
      Lands: 2,
      birth_date: "19/2/1985",
      contact: 9493723628,
      email: "edesaiaditya@gmail.com",
      edit: dynamicStringSpan,
    },
    {
      id: 4,
      name: "Sai Aditya",
      gender: "Male",
      projects: 8,
      Lands: 2,
      birth_date: "19/2/1985",
      contact: 9493723628,
      email: "edesaiaditya@gmail.com",
      edit: dynamicStringSpan,
    },
    {
      id: 5,
      name: "Sai Aditya",
      gender: "Male",
      projects: 8,
      Lands: 2,
      birth_date: "19/2/1985",
      contact: 9493723628,
      email: "edesaiaditya@gmail.com",
      edit: dynamicStringSpan,
    },
    {
      id: 6,
      name: "Sai Aditya",
      gender: "Male",
      projects: 8,
      Lands: 2,
      birth_date: "19/2/1985",
      contact: 9493723628,
      email: "edesaiaditya@gmail.com",
      edit: dynamicStringSpan,
    },
    {
      id: 7,
      name: "Sai Aditya",
      gender: "Male",
      projects: 8,
      Lands: 2,
      birth_date: "19/2/1985",
      contact: 9493723628,
      email: "edesaiaditya@gmail.com",
      edit: dynamicStringSpan,
    },
    {
      id: 8,
      name: "Sai Aditya",
      gender: "Male",
      projects: 8,
      Lands: 2,
      birth_date: "19/2/1985",
      contact: 9493723628,
      email: "edesaiaditya@gmail.com",
      edit: dynamicStringSpan,
    },
    {
      id: 9,
      name: "Sai Aditya",
      gender: "Male",
      projects: 8,
      Lands: 2,
      birth_date: "19/2/1985",
      contact: 9493723628,
      email: "edesaiaditya@gmail.com",
      edit: dynamicStringSpan,
    },
    {
      id: 10,
      name: "Sai Aditya",
      gender: "Male",
      projects: 8,
      Lands: 2,
      birth_date: "19/2/1985",
      contact: 9493723628,
      email: "edesaiaditya@gmail.com",
      edit: dynamicStringSpan,
    },
    {
      id: 11,
      name: "Sai Aditya",
      gender: "Male",
      projects: 8,
      Lands: 2,
      birth_date: "19/2/1985",
      contact: 9493723628,
      email: "edesaiaditya@gmail.com",
      edit: dynamicStringSpan,
    },
    {
      id: 12,
      name: "Sai Aditya",
      gender: "Male",
      projects: 8,
      Lands: 2,
      birth_date: "19/2/1985",
      contact: 9493723628,
      email: "edesaiaditya@gmail.com",
      edit: dynamicStringSpan,
    },
    {
      id: 13,
      name: "Sai Aditya",
      gender: "Male",
      projects: 8,
      Lands: 2,
      birth_date: "19/2/1985",
      contact: 9493723628,
      email: "edesaiaditya@gmail.com",
      edit: dynamicStringSpan,
    },
    {
      id: 14,
      name: "Sai Aditya",
      gender: "Male",
      projects: 8,
      Lands: 2,
      birth_date: "19/2/1985",
      contact: 9493723628,
      email: "edesaiaditya@gmail.com",
      edit: dynamicStringSpan,
    },
    {
      id: 15,
      name: "Sai Aditya",
      gender: "Male",
      projects: 8,
      Lands: 2,
      birth_date: "19/2/1985",
      contact: 9493723628,
      email: "edesaiaditya@gmail.com",
      edit: dynamicStringSpan,
    },
    {
      id: 15,
      name: "Sai Aditya",
      gender: "Male",
      projects: 8,
      Lands: 2,
      birth_date: "19/2/1985",
      contact: 9493723628,
      email: "edesaiaditya@gmail.com",
      edit: dynamicStringSpan,
    },
    {
      id: 15,
      name: "Sai Aditya",
      gender: "Male",
      projects: 8,
      Lands: 2,
      birth_date: "19/2/1985",
      contact: 9493723628,
      email: "edesaiaditya@gmail.com",
      edit: dynamicStringSpan,
    },
    {
      id: 15,
      name: "Sai Aditya",
      gender: "Male",
      projects: 8,
      Lands: 2,
      birth_date: "19/2/1985",
      contact: 9493723628,
      email: "edesaiaditya@gmail.com",
      edit: dynamicStringSpan,
    },
  ];
  return (
    <div>
      <Table columns={columns} rows={rows} viewRow={viewDetails}></Table>
    </div>
  );
}

export default Admin_Dashboard;

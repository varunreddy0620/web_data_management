// SAI ADITYA EDE         1002035418
// VARUN REDDY KOKKANTI   1002022689
// SAI LASYA YADALA       1002029134

import React from "react";
import { Router, Route } from "react-router-dom";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Table from "./Table";
import './table.css'

function Family_Mem() {
  const viewDetails=()=>{

  }
  const cols=["id","name","gender","projects","lands","birth_date","contact","email,"]
    const row=[ 
      { id : " 1001 " , name : "Melcor" , gender : "M" , projects : "4" , lands : "2" , birth_date : "10/11/88" , contact : "(202)-321-9697" , email : "m1001@gmail.com" } , 
      { id : "1002" , name : "Iriama Diaz De Castillo" , gender : "F" , projects : "1" , lands : "1" , birth_date : "08/27/79" , contact : "(359)-142-6784" , email : "i1002@gmail.com" } , 
      { id : "1003" , name : "Manuel Diaz Alfonzo" , gender : "F" , projects : "2" , lands : "2" , birth_date : "05/08/73" , contact : "(469)-384-6230" , email : "m1003@gmail.com" } , 
      { id : "1004" , name : "Iriada Diaz Alfonzo" , gender : "F" , projects : "3" , lands : "5" , birth_date : "02/15/64" , contact : "(369)-492-4789" , email : "i1005@gmail.com" } , 
      {id : "1005" , name : "Mario Diaz Alfonzo" , gender : "F" , projects : "2" , lands : "2" , birth_date : "11/10/73" , contact : "(695)-364-3939" , email : "m1005@gmail.com"} , 
      {id : "1006" , name : "Maria Diaz" , gender : "F" , projects : "1" , lands : "1" , birth_date : "09/25/83" , contact : "(769)-463-1294" , email : "m1006@gmail.com"} , 
      {id : "1007" , name : "Amilcar Diaz" , gender : "M" , projects : "4" , lands : "1" , birth_date : "09/25/83" , contact : "(643)-942-1681" , email : "a1007@gmail.com" } , 
      {id : "1008" , name : "Benito Diaz" , gender : "M" , projects : "3" , lands : "2" , birth_date : "11/10/88" , contact : "(681)-362-1917" , email : "b1008@gmail.com" } , 
      {id : "1009" , name : "Cesar Diaz" , gender : "F" , projects : "5" , lands : "4" , birth_date : "03/11/89" , contact : "(482)-234-1001" , email : "c1009@gmail.com" } , 
      {id : "1010" , name : "Dalila Diaz" , gender : "F" , projects : "4" , lands : "2" , birth_date : "03/12/85" , contact : "(682)-112-1023" , email : "d1010@gmail.com"} , 
      {id : "1011" , name : "Eudys Diaz" , gender : "M" , projects : "6" , lands : "8" , birth_date : "12/13/79" , contact : "(467)-234-9876" , email : "e1011@gmail.com" } , 
      {id : "1012" , name : "Fanny Diaz" , gender : "M" , projects : "2" , lands : "3" , birth_date : "01/11/75" , contact : "(467),-345-3456" , email : "f1012@gmail.com" }
      ]
      
  return (
    <div className="family_details">
      <h2>Family Details</h2>
      <Table columns={cols} rows={row} viewRow={viewDetails}></Table>
      
     
    </div>
  );
}

export default Family_Mem;

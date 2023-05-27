// SAI ADITYA EDE         1002035418
// VARUN REDDY KOKKANTI   1002022689
// SAI LASYA YADALA       1002029134


import React from 'react'
import './table.css'

const land = new URL("../img/sss.png", import.meta.url);

function Land_des() {
  return (
    <div className='land_description' >
         <div className='Create'> 
            <button>Sell Property</button>
        </div>
        <h2>Property is not for sale</h2>
       
        <img style={{width:'80%',height:'200px',marginLeft:'10%'}} src={land} />
        <div>
            <h2>Projects done on this Land</h2>
            <span>text here</span>
        </div>
       
        <div>
            <h2>Trials</h2>
            <span>No trials </span>
        </div>
        <div>
            <h2>Area </h2>
            <span>12000 sq.ft </span>
        </div>
        <div>
            <h2>Income</h2>
            <span>5 Lakhs</span>
        </div>
        <div>
            <h2>Expenses</h2>
            <span>2 Lakhs</span>
        </div>
        <div>
            <h2>Maerket Value</h2>
            <span>50 Lakhs</span>
        </div>
    </div>
  )
}

export default Land_des
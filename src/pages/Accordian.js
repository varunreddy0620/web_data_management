// SAI ADITYA EDE         1002035418
// VARUN REDDY KOKKANTI   1002022689
// SAI LASYA YADALA       1002029134


import React, { useState } from 'react';
import './Accordian.css'
import Table from './Table';

const Accordian = (props) => {
  const {cols,rows}=props
  const [isActive, setIsActive] = useState(false);
  const accordionData = {
    title: 'total projects done ',
   
  };

  const { title, content } = accordionData;

  return (
    <React.Fragment>
     
      <div className="accordion">
  <div className="accordion-item">
    <div
      className="accordion-title"
      onClick={() => setIsActive(!isActive)}
    >
      <div>{title}</div>
      <div >{isActive ? '-' : '+'}</div>
    </div>
    {isActive && <div className="accordion-content"><Table columns={cols} rows={rows} ></Table></div>}
  </div>
</div>
    </React.Fragment>
  );
};

export default Accordian;
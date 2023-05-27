// SAI ADITYA EDE         1002035418
// VARUN REDDY KOKKANTI   1002022689
// SAI LASYA YADALA       1002029134



import React from "react";

function Table(props) {
  const { columns, rows,viewRow } = props;
  console.log(columns);
  const selectedrow=(r)=>{
    console.log(r)
  }

  return (
    <div className="table_container">
      <table>
        <tr>
          {columns.map((col) => (
            <th>{col}</th>
          ))}
        </tr>
        {rows.map((row) => (
          <tr value={row}>
            
            {Object.values(columns).map((d) => 
             <td value={d} onClick={()=>viewRow(row)} >{row[d]}</td>
            )}
            
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;

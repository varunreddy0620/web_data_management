
// SAI ADITYA EDE         1002035418
// VARUN REDDY KOKKANTI   1002022689
// SAI LASYA YADALA       1002029134



import React from 'react'
import {Link} from 'react-router-dom'

function Changepassword() {
    
    const handleSubmit=()=>{

    }
  return (
    <div>
     <div className="form" style={{marginLeft:'25px'}}>
        <h3>Change Password</h3>
      <form onSubmit={handleSubmit}>
        <div className="input" style={{display:'flex',flexDirection:'column'}}>
          <label>Enter Email id </label>
          <input type="text" name="uname" required />
         
        </div>
       
        <div className="button">
          <input type="submit" value="Submit" />
        </div>
      </form>
      <p>Back to login  <Link to="/login">Login Here</Link></p>
    </div>
    </div>
    
  )
}

export default Changepassword
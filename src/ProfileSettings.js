// SAI ADITYA EDE         1002035418
// VARUN REDDY KOKKANTI   1002022689
// SAI LASYA YADALA       1002029134


import React from 'react'
import './Admin.css'
function ProfileSettings() {
const profile = new URL("./img/profilepic.png", import.meta.url);

  return (
    <div className='maindiv'>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
        {/* height: 50px;
    margin-left: 30%;
    border-radius: 50%; */}

          <img style={{height:'150px',margin:'10%',borderRadius:'5%'}} src={profile} />
        </div>
        <div className='subdiv'>
       
            <label>Username </label>
            <input type="text" name="uname" required />
       
        
            <label>Email </label>
            <input type="text" name="uname" required />
         
        
            <label>Password </label>
            <input type="password" name="uname" required />
            <label>Change Password </label>
          <a href=''><span>click here......</span> </a>
         
            <label>Contact </label>
            <input type="text" name="uname" required />
          
            <label>Lands </label>
          The total lands own by are 8 and your family is 20 and its area is 200 acres 
         
            <label>Lands </label>
          The total Projects own by are 8 and your family arw 20
         </div>
       
      </div>
    </div>
  )
}

export default ProfileSettings
// SAI ADITYA EDE         1002035418
// VARUN REDDY KOKKANTI   1002022689
// SAI LASYA YADALA       1002029134
import React from 'react'
import Navbar from '../Navbar'
import './Home.css'
// const profile = new URL("../img/sss.png", import.meta.url);

function Home() {
  return (
    <>
      <Navbar></Navbar>
    {/* <div style={{display:'flex',justifyContent:"space-around"}}>
      <div style={{width:'50%'}}>
      <img style={{height:'500px'}} src={profile} />
      </div>
      <div style={{display:'flex',justifyContent:'center',alignItems:"center"}}> */}
      <div className='home'>
      <h1 style={{color:"white",fontWeight:"60"}}>DIAZ SIFTONES WEBSITE</h1>
      </div>
   
    {/* </div>
    </div> */}
    
    </>
  )
}

export default Home
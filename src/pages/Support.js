// SAI ADITYA EDE         1002035418
// VARUN REDDY KOKKANTI   1002022689
// SAI LASYA YADALA       1002029134

import React from 'react'
import Navbar from '../Navbar'

function Support() {
  return (
    <><Navbar></Navbar>
    <div>
    <h1>Contact Support </h1>

<form >
  <p><label for="w3review">You can shoot your Queries here :</label></p>
  <textarea id="w3review" name="w3review" rows="4" cols="50">At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.</textarea>
  <br/>
  <input type="submit" value="Submit" />
</form>

<p>Coontact support team send you queries to them".</p>


</div>
    </>
  )
}

export default Support
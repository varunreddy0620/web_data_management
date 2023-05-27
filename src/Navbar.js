// SAI ADITYA EDE         1002035418
// VARUN REDDY KOKKANTI   1002022689
// SAI LASYA YADALA       1002029134


import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
     
      <ul >
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/support">Support</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <a href="https://sxe5418.uta.cloud/">Blog</a>
       
        
      </ul>
    </nav>
  )
}



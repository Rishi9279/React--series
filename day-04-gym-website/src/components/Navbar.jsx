import React from "react";
import "./Navbar.css";


const Navbar = () => {


  return (
    <div>
      <nav className="navbar">
        <div className="logo">Rishi Gym</div>
        <ul className="navlinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Plans</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          {/* <button className="mode-btn" onClick={()=>{
            setMode(!Mode)
          }}>Mode</button> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

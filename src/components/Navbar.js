import React from "react";
import {NavLink } from "react-router-dom";
 
 import "./styles.css";

const Navbar = () =>{
return(
    
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
      <div className="container-fluid">
        <NavLink className="navbar-brand"  to="/">The Thoughts</NavLink>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" exact to="/">Home</NavLink>
              </li>
              
              
            </ul>
          </div>
         
          <NavLink className="btn btn-outline-light" to="/AddBlog">Add Blog</NavLink>
      </div>
    </div>

  </nav>
    
);
};

export default  Navbar;
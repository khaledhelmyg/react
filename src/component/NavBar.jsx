import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const NavBar = props => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Navbar</a>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item ">
            <NavLink className="nav-link" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="contact">Contact Us</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/cart" >Shopping Cart</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/login" >login</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/admin" >Admin</NavLink>
        </li>
     </ul>
    </div>
    <Link to="/cart">
        <span className="badge badge-primary m-2">
        <i className="fa fa-money-bill" ></i> 
           {"  "} {props.productsCount}
        </span>
    </Link>    
  </nav>
);
}
 
export default NavBar;

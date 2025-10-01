import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from './Assest/book-logo.jpg'
import HomePage from './HomePage';
import Discount from './Discount';
import NewBooks from './NewBooks';
import Featured from './Featured';
import Signup from './Form/Signup';
import Login from './Form/Login';



function NavBar() {
  return (
    <nav className="navbar">
    <ul className="nav-links">
      <li>
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li>
        <Link to="/discount" className="nav-link">Discount</Link>
      </li>
      <li>
        <Link to="/featured" className="nav-link">Featured</Link>
      </li>
      <li>
        <Link to="/new-books" className="nav-link">New Books</Link>
      </li>
      <li className="nav-right">
        <Link to="/login" className="nav-link">Login</Link>
      </li>
      <li className="nav-right">
        <Link to="/signup" className="nav-link">Signup</Link>
      </li>
      
    </ul>
  </nav>
);
}

export default NavBar;

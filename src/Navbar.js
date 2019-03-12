import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

class Navbar extends Component {
  render() {
    return (
      <ul>
	<li><NavLink to="/Login">Login</NavLink></li>
	<li><NavLink to="/Register">Register</NavLink></li>

	</ul>
    );
  }
}

export default Navbar;

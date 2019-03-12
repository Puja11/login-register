import React, { Component } from 'react';
import App from './App';
import './App.css';

class Register extends Component {
  render() {
    return (
     <div className="container">
		
	<div className="form-group">
	  <label for="usrReg">Name:</label>
	  <input type="text" className="form-control" id="usrReg"/>
	</div>
	<div className="form-group">
	  <label for="pwdReg">Password:</label>
	  <input type="password" className="form-control" id="pwdReg"/>
	</div>
	<div className="form-group">
	  <label for="genderReg">Gender:</label>
	  <select className="form-control" id="genderReg">
		<option value="Male">Male</option>
		<option value="Female">Female</option>
	  </select>
	</div>
	<button type="button" class="btn btn-primary">Submit</button>	
	</div>
    );
  }
}

export default Register;

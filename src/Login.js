import React, { Component } from 'react';
import App from './App';
import Data from './Data';
import './App.css';
import { NavLink } from 'react-router-dom';

import style from 'bootstrap/dist/css/bootstrap.css';

class Login extends Component {

constructor(){
super();
	this.loginStatus=this.loginStatus.bind(this);
	this.state={
		error:"",
		success:"",
		nextPage:"",
	}
}
loginStatus(){
	let user=document.getElementById("usr").value;
	let pwrd=document.getElementById("pwd").value;
	
	fetch('https://api.prontoitlabs.com/api/v1/user/login', {
                method: 'POST',
		headers : new Headers(),
               body:JSON.stringify({userName:user, password:pwrd})
            }).then((response) => {console.log(response.ok);
		if(response.ok==false){
			this.setState({error:"Bad Credentials",success:""});
		}
		 else if(response.ok==true){
			this.setState({error:"",success:"Login you ",nextPage:"/Data"});
		}


		})
              .catch((err)=>{console.log(err);})
	
}
  render() {
    return (
      <div className="container">
		
	<div className="form-group">
	  <label for="usr">Username:</label>
	  <input type="text" className="form-control"  id="usr"/>
	</div>
	<div className="form-group">
	  <label for="pwd">Password:</label>
	  <input type="password" className="form-control" id="pwd"/>
	</div>
	<NavLink to={this.state.nextPage} className="btn btn-primary" onClick= {this.loginStatus}>Submit</NavLink>
	<div id="message">{this.state.error}{this.state.success}</div>	
	</div>
    );
  }
}

export default Login;

import React, { Component } from 'react';
import App from './App';
import './App.css';

class Register extends Component {
constructor(){
	super();
	this.componentDidMount=this.componentDidMount.bind(this);

}

componentDidMount(){
	
	fetch('https://api.prontoitlabs.com/api/v1/user/login', {
                method: 'GET',
	      }).then((res) => {console.log(JSON.stringify(res));
		})
		.then((data) => {console.log(JSON.stringify(data));
		})
              .catch((err)=>{console.log(err);})
}
  render() {
    return (
	
     <div className="container">
		
	data
	</div>
    );
  }
}

export default Register;

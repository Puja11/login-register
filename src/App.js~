import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Root from './Root';
import Login from './Login';
import Register from './Register';
import GenericNotFound from './GenericNotFound';
import Data from './Data';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
/*component that creates routes for application*/
class App extends Component {
  render() {
    return (
     <BrowserRouter>
	 <div>
	 <Root/>
	 <Switch>
		<Route path="/" component={Login} exact/>
		<Route path="/login-register" component={Login} exact/>
		<Route path="/Login" component={Login}/>
		<Route path="/Register" component={Register}/>
		<Route path="/Data" component={Data}/>
		{/*routes written for any junk route*/}
		<Route  component={GenericNotFound} />
	</Switch>
		
		</div>
	 </BrowserRouter>
    );
  }
}

export default App;


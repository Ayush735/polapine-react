import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import App from '../App';
import Dashboard from '../components/Dashboard/Dashboard';

class AppRouter extends React.Component{
	render(){
		return(
					<div>
						<Router>
										<div>
											<Route path="/" component={App} />
											<Route path="/dashboard" component={Dashboard} /> 
										</div>
					  </Router>
  				</div>
			)
	}
}

export default AppRouter;
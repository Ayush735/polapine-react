import React, { Component } from 'react';
import Header from './components/Layout/Header';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/LoginPage'
import Master from './components/Master/index'
class App extends Component {
	constructor(){
		super();
		this.state={
			isDashboardActive: false,
			isHomeActive: false,
      isLoginActive: false,
      isMasterActive: true
		}
		this.clickDashboard = this.clickDashboard.bind(this);
		this.clickHome = this.clickHome.bind(this);
		this.clickSignIn = this.clickSignIn.bind(this);
		this.clickMaster = this.clickMaster.bind(this);
	}

		clickDashboard(){
      this.setState({isDashboardActive: true});
      this.setState({isLoginActive: false});
			this.setState({isHomeActive: false});
      this.setState({isMasterActive: false});
		}
		clickHome(){
      this.setState({isHomeActive: true});
      this.setState({isLoginActive: false});
			this.setState({isDashboardActive: false});
      this.setState({isMasterActive: false});
		}
		clickSignIn(){
      this.setState({isLoginActive: true});
			this.setState({isHomeActive: false});
      this.setState({isDashboardActive: false});
      this.setState({isMasterActive: false});

		}
		clickMaster(){
			this.setState({isMasterActive: true});
			this.setState({isLoginActive: false});
			this.setState({isHomeActive: false});
      this.setState({isDashboardActive: false});
		}

  render() {
    return (
				<html>
					<head>
					  <title></title>
						<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
					</head>
					<body>
					 <div className="App">
				          <Header clickDashboard={this.clickDashboard} clickHome={this.clickHome} clickSignIn={this.clickSignIn} clickMaster={this.clickMaster} />
				          {
										this.state.isDashboardActive?
											<Dashboard /> : ''
									}
									{
										this.state.isHomeActive?
										<Home /> : ''
									}
									{
										this.state.isLoginActive?
										<Login /> : ''
									}
                  {
                    this.state.isMasterActive?
                    <Master /> : ''
                  }
				      </div>
					</body>
				</html>
     
    );
  }
}

export default App;


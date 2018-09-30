import React, { Component } from 'react';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
	
class Header extends  React.Component{
    constructor(props){
        super(props);
    }

		
    render(){
        return (
	        			<div>
	        			<Navbar inverse collapseOnSelect>
								  <Navbar.Header>
								    <Navbar.Brand>
								      <a href="/">PolaPine</a>
								    </Navbar.Brand>
								    <Navbar.Toggle />
								  </Navbar.Header>
								  <Navbar.Collapse>
								    <Nav>
								      <NavItem eventKey={1} href="#">
								        <div onClick={this.props.clickHome} >Home </div>
								      </NavItem>
								      <NavItem eventKey={2} href="#">
								        <div onClick={this.props.clickDashboard} >Dashboard</div>
								      </NavItem>
								      <NavItem eventKey={3} href="#">
								        <div onClick={this.props.clickMaster}> Setting </div>
								      </NavItem>
								      <NavDropdown eventKey={4} title="Dropdown" id="basic-nav-dropdown">
								        <MenuItem eventKey={4.1}>Action</MenuItem>
								        <MenuItem eventKey={4.2}>Another action</MenuItem>
								        <MenuItem eventKey={4.3}>Something else here</MenuItem>
								        <MenuItem divider />
								        <MenuItem eventKey={4.3}>Separated link</MenuItem>
								      </NavDropdown>
								    </Nav>
								    <Nav pullRight>
								      <NavItem eventKey={1} href="#">
								        <div onClick={this.props.clickSignIn} >SignIn</div>
								      </NavItem>
								      <NavItem eventKey={2} href="#">
								        Logout
								      </NavItem>
								    </Nav>
								  </Navbar.Collapse>
								</Navbar>
								
	        			</div>

				        )
				    }
				}

export default Header;

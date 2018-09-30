import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {withLocalize, Translate} from 'react-localize-redux';
import {Navbar, Nav, NavItem, Button, Glyphiconn, MenuItem, NavDropdown} from 'react-bootstrap';
import PropertyType from './PropertyType';
class Master extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	isPropertyType: true
        };
    }

    clickProperty(){
    	this.setState({isPropertyType: true});
    }
    render() {
	    return(
	    		<div>
						<Navbar>
						  <Nav>
						    <NavItem eventKey={1} href="#">
						      <div onClick={this.clickProperty.bind(this)}>Property Type</div>
						    </NavItem>
						    <NavItem eventKey={2} href="#">
						      Link
						    </NavItem>
						    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
						      <MenuItem eventKey={3.1}>Action</MenuItem>
						      <MenuItem eventKey={3.2}>Another action</MenuItem>
						      <MenuItem eventKey={3.3}>Something else here</MenuItem>
						      <MenuItem divider />
						      <MenuItem eventKey={3.4}>Separated link</MenuItem>
						    </NavDropdown>
						  </Nav>
						</Navbar>
						<div className="container">
							{
								this.state.isPropertyType?
								<PropertyType /> : ''
							}
						</div>
	    		</div>
	    	)
	 }
}


function mapStateToProps(state) {
  return {
    
  }
}

export default withLocalize(withRouter(connect(mapStateToProps,
{

} )(Master)));

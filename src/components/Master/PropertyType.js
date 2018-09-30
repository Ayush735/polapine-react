import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {withLocalize, Translate} from 'react-localize-redux';
import {Navbar, Nav, NavItem, Button, Glyphiconn, MenuItem, NavDropdown} from 'react-bootstrap';

class PropertyType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isPropertyType: false,
          list: []
        };
    }

    componenetWillMount(){
    	debugger
    	 axios.get(` http://localhost:3000/api/v1/amenities`)
	      .then(res => {
	        debugger
	      })
    }

    componenetDidMount(){
    	debugger
    	 axios.get(` http://localhost:3000/api/v1/amenities`)
	      .then(res => {
	        debugger
	      })
    }

    render() {

    	debugger
    	 axios.get(` http://localhost:3000/api/v1/amenities`)
	      .then(res => {
	        debugger
	      })
	      
      return(
          <div className="card-body">
                    <div className="row">
                      <div className="col-md-12 sortable-table">
                          <button className="btn btn-primary addButton" onClick={() =>this.toggle('POST')}>
                            <i className="fa fa-plus"></i> Add
                          </button>
                        <BootstrapTable deleteRow={ true } data={ this.state.list } search={ true } multiColumnSearch={ true } pagination={ true } striped hover condensed>
                          <TableHeaderColumn hidden={ this.state.hidden } tdAttr={ { 'data-attr': 'Obj Id' } }  dataField='objectId' dataSort={ true } isKey searchable={ false }>Obj Id</TableHeaderColumn>
                          <TableHeaderColumn tdAttr={ { 'data-attr': 'Name' } }  dataField='companyTypeName' dataSort={ true }> Name </TableHeaderColumn>
                          <TableHeaderColumn tdAttr={ { 'data-attr': 'Code' } }  dataField='companyTypeCode' dataSort={ true }>Code</TableHeaderColumn>
                          <TableHeaderColumn tdAttr={ { 'data-attr': 'Definition' } }  dataField='companyTypeDefinition' dataSort={ true }>Definition</TableHeaderColumn>
                          <TableHeaderColumn tdAttr={ { 'data-attr': 'Definition' } }  dataField='companyTypeDescription' dataSort={ true }>Description</TableHeaderColumn>
                          <TableHeaderColumn tdAttr={ {'data-attr':'status'}}  dataField='status' >Status</TableHeaderColumn>
                          <TableHeaderColumn tdAttr={ { 'data-attr': 'createdAt' } }   dataField=""  dataField='createdAt'>Create Date</TableHeaderColumn>
                          <TableHeaderColumn tdAttr={ { 'data-attr': 'Action' } }   dataField="">Action</TableHeaderColumn>
                        </BootstrapTable>
                      </div>
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

} )(PropertyType)));

import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
    
   <div className="welcomeContainer">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="welcomedesc">
                    <h3>Welcome Home</h3>
                    <p>Welcome to your Command Post dashboard.</p>
                    <p><a href="#">close this</a></p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="welcomedesc">
                    <h3>Next Steps</h3>
                    <p>Step 1 : <a href="/contact-page">Add Contact</a></p>     
                    <p>Make sure you have up to date contact information.</p>               
                    <p>Step 2 : <a href="/companies-list">Add Company</a></p>
                    <p>Make sure you have up to date company information.</p>                    
                    <p>Step 3 : <a href="/projects-list">Add Project</a></p>       
                    <p>Make sure you have up to date project information.</p>                        
                </div>
            </div>
        </div>
    </div>
	</div>)
}
}

export default Home;
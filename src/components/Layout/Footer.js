 import React, { Component } from 'react';
import {Link} from 'react-router'

import { Navbar, Button } from 'react-bootstrap';
import bannerImage from '../static/images/Cobilogo.png';

class Footer extends Component {
 render(){
return (
<footer>
            <div className="footerBottom">
                <div className="container">
                    <div className="footerBottomRow">
                        <div className="footerBottom-L">
                            <div className="footerAddress">
                                <p>231 West 44 Drive San Marino, California 80052</p>
                                <p> <a href="#">Phone: (999)999-9999</a></p>
                                <p> <a href="#">Email: McCann.Construction@gmail.com</a></p>
                            </div>
                            <div className="footerSocialIcon">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footerBottom-R">
                            <div className="footerLogo"><img src={bannerImage}/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerCopyright">
                <div className="container"><p>&copy; Copyright 2018, All Rights Reserved. </p></div>
            </div>
        </footer>
		
)
}
}
export default Footer;
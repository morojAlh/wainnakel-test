import React from 'react';
import {Nav, Navbar,NavDropdown} from 'react-bootstrap';
import '../App.css';
import wainnakelAndLogo from '../images/wainnakelAndLogo.png';
import menu from '../images/menu.png';

const NavigationBar = () => {
      return(
        <div>
            <Navbar bg="#0b9496" variant="dark" className="nav">
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                  <div className="registerNav">
                  <Nav.Link href="#">إنشاء حساب</Nav.Link>
                  <Nav.Link href="#">تسجيل دخول</Nav.Link>
                    </div>
                  <NavDropdown title={<span><img src={menu} width="30px" alt="menu"></img></span>} id="collasible-nav-dropdown" className="registerDropdown">
                    <NavDropdown.Item href="#">إنشاء حساب</NavDropdown.Item>
                    <NavDropdown.Item href="#">تسجيل دخول</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
              <Navbar.Collapse href="#" className="justify-content-end">
                  <img src={wainnakelAndLogo} alt="wainnakel" className="navLogo"/>
              </Navbar.Collapse>
            </Navbar>
        </div>
      )
}

export default NavigationBar;
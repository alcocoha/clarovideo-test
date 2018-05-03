// Dependencias
import React, { Component } from 'react';

// Assets
import logo from '../assets/images/clarovideo-logo-sitio.svg';
import '../assets/css/header.css';

class Header extends Component{
    render(){
        return(
            <div className="Header">
                <nav>
                    <img src={logo} className="logo" alt="logo" />
                </nav>
            </div>
        );
    }
}
export default Header;
import React from 'react';

import logo_landing from '../../assets/logo-landing.png';
import { ReactComponent as Logo_icon } from '../../assets/icons/login.svg';
import { ReactComponent as Register_icon } from '../../assets/icons/register.svg';

import "./styles.css";

const Landing: React.FC = () => {
  return (
    <div className="landing-container" >
        <header>
            <img src={logo_landing} alt="logo-image" className="logo-image"/>

            <div className="user-buttons">
                <div className="login btn">
                    <Logo_icon className="icon" />
                    Login
                </div>
                <div className="register btn">
                    <Register_icon className="icon" />
                    Register
                </div>
            </div>
        </header>
    </div>
  );
}

export default Landing;
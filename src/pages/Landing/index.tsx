import React from 'react';

import logo_landing from '../../assets/logo-landing.png';
import mainLogo from '../../assets/logo.png';
import { ReactComponent as LogoIcon } from '../../assets/icons/login.svg';
import { ReactComponent as RegisterIcon } from '../../assets/icons/register.svg';
import { ReactComponent as BgDecoration } from '../../assets/icons/bg-decoration.svg';
import { ReactComponent as LogoAside } from '../../assets/icons/logo-aside.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as RegisterApiIcon } from '../../assets/icons/register-api.svg';
import { ReactComponent as DiscoverIcon } from '../../assets/icons/world.svg';
import { ReactComponent as PayPalIcon } from '../../assets/icons/paypal.svg';

import "./styles.css";

const Landing: React.FC = () => {
  return (
    <div className="landing-container" >
        <header>
            <img src={logo_landing} alt="apicompassa" className="logo-image"/>

            <div className="user-buttons">
                <div className="login btn">
                    <LogoIcon className="icon" />
                    Login
                </div>
                <div className="register btn">
                    <RegisterIcon className="icon" />
                    Register
                </div>
            </div>
        </header>

        <aside className="aside-bar">
            <LogoAside className="logo-aside" />

            <label htmlFor="search-input" className="search-box">
                <SearchIcon className="search-icon" />
                <input id="search-input" type="text" placeholder="Search APIs..."/>
            </label>

            <div className="register-api aside-container">
                <RegisterApiIcon className="aside-icon" />
                <span>Register API</span>
            </div>

            <div className="register-api aside-container">
                <DiscoverIcon className="aside-icon" />
                <span>Discover</span>
            </div>

            <div className="donate-container">
                <PayPalIcon className="paypal-icon" />
                <span>Donate</span>
            </div>

        </aside>

        <main className="main-content">
            <img src={mainLogo} alt="API Compass"/>
            <div className="content">
                <h1>The easiest way to discover new apis</h1>
                <h3>The API Compass aims to facilitate the search of public APIs arround the world. feel free to register an API that hasn't been registered yet!</h3>
            </div>
        </main>

        <footer className="hyperlinks">
            <span className="faq">FAQ</span>
            <span className="termsandconditions">Terms and Conditions</span>
        </footer>

        <BgDecoration className="bg-decoration" />
    </div>
  );
}

export default Landing;
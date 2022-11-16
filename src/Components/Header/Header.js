import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBicycle } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand header" href="/get-your-kick">
                        <FontAwesomeIcon className='fs-1 icon' icon={faBicycle}></FontAwesomeIcon>
                        <h3>Get Your Kick</h3>
                    </a>
                </div>
            </nav>
        </div>

    );
};

export default Header;
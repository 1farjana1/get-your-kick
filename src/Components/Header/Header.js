import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBicycle } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar mt-2 mb-0">
                <div>
                    <a className="navbar-brand header" href="/get-your-kick">
                        <FontAwesomeIcon className='fs-1 icon' icon={faBicycle}></FontAwesomeIcon>
                        <h3>Get Your Kick</h3>
                    </a>
                </div>
            </nav>
            <div>
                <h2 className='header-part'>Select your Exercise</h2>
            </div>
        </div>

    );
};

export default Header;